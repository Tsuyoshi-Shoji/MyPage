"use client";

import { useEffect, useRef } from "react";
import type { CareerItem } from "@/data/portfolio";

export function CareerTimeline({ items }: { items: CareerItem[] }) {
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const verticalLayout = window.matchMedia("(max-width: 760px)");
    const stages = Array.from(timeline.querySelectorAll<HTMLLIElement>(":scope > li"));
    const nodes = Array.from(timeline.querySelectorAll<HTMLElement>(".career-node"));
    let thresholds: number[] = [];
    let frame = 0;
    let active = false;
    let needsMeasurement = true;

    const measure = () => {
      const bounds = timeline.getBoundingClientRect();
      const track = getComputedStyle(timeline, "::before");
      const vertical = verticalLayout.matches;
      const start = parseFloat(vertical ? track.top : track.left);
      const length = parseFloat(vertical ? track.height : track.width);
      thresholds = nodes.map((node) => {
        const marker = node.getBoundingClientRect();
        const position = vertical
          ? marker.top + marker.height / 2 - bounds.top
          : marker.left + marker.width / 2 - bounds.left;
        return Math.max(0, Math.min(1, (position - start) / Math.max(1, length)));
      });
      needsMeasurement = false;
    };

    const update = () => {
      frame = 0;
      if (document.hidden || reducedMotion.matches) return;
      if (needsMeasurement) measure();

      const bounds = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const started = bounds.top <= viewportHeight * 0.8;
      const progress = Math.max(0, Math.min(1,
        (viewportHeight * 0.8 - bounds.top) / (bounds.height + viewportHeight * 0.25),
      ));

      timeline.style.setProperty("--career-progress", String(progress));
      stages.forEach((stage, index) => {
        const reached = String(started && progress >= thresholds[index]);
        if (stage.dataset.reached !== reached) stage.dataset.reached = reached;
      });
    };

    const schedule = () => {
      if (!frame && active && !document.hidden && !reducedMotion.matches) {
        frame = requestAnimationFrame(update);
      }
    };

    const resize = () => {
      needsMeasurement = true;
      schedule();
    };

    const configureMotion = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (reducedMotion.matches) {
        delete timeline.dataset.motion;
        timeline.style.removeProperty("--career-progress");
      } else {
        timeline.dataset.motion = "ready";
        needsMeasurement = true;
        update();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) schedule();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }, { rootMargin: "15% 0px" });
    const resizeObserver = new ResizeObserver(resize);

    configureMotion();
    observer.observe(timeline);
    resizeObserver.observe(timeline);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", schedule);
    reducedMotion.addEventListener("change", configureMotion);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", schedule);
      reducedMotion.removeEventListener("change", configureMotion);
      delete timeline.dataset.motion;
      timeline.style.removeProperty("--career-progress");
      stages.forEach((stage) => { delete stage.dataset.reached; });
    };
  }, [items]);

  return (
    <ol className="career-list" ref={timelineRef}>
      {items.map((item, index) => (
        <li key={item.role}>
          <span className="career-node" aria-hidden="true" />
          <div className="career-reveal">
            <div className="career-content">
              <p className="career-period micro-label">{item.period}</p>
              <h3>{item.role}</h3>
              <span className="career-index micro-label">0{index + 1}</span>
              <p className="career-description">{item.description}</p>
              {item.responsibilities && (
                <div className="career-responsibilities">
                  <p className="micro-label">主な業務</p>
                  <ul>
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}