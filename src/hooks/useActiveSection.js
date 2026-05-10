import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observerCallback = (entries) => {
      let maxRatio = 0;
      let mostVisible = activeSection;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisible = entry.target.id;
        }
      });
      
      if (maxRatio > 0) {
          setActiveSection(mostVisible);
      }
    };

    const options = {
      root: null,
      rootMargin: `-${offset}px 0px 0px 0px`,
      threshold: [0.2, 0.5, 0.8]
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, offset]);

  return activeSection;
}
