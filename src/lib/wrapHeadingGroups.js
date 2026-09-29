// $lib/wrapHeadingGroups.js
// Client-only: relies on DOMParser, so only call this from onMount / browser code.

const HEADING_TAGS = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 };

export function wrapHeadingGroups(
  html,
  { tag = 'div', classFor = (lvl) => `content-h${lvl}`, atomicLevels = [] } = {}
) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div id="__root">${html}</div>`, 'text/html');
  const root = doc.getElementById('__root');

  const rootWrapper = doc.createElement(tag);
  rootWrapper.className = 'doc';

  const stack = [{ level: 0, container: rootWrapper }];

  Array.from(root.childNodes).forEach((node) => {
    const level = node.nodeType === 1 ? HEADING_TAGS[node.tagName] : undefined;

    if (level) {
      while (stack.length > 1 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }
      const parent = stack[stack.length - 1].container;
      const headingClone = node.cloneNode(true);

      if (atomicLevels.includes(level)) {
        const group = doc.createElement(tag);
        group.className = classFor(level);
        if (headingClone.id) group.id = `${headingClone.id}-group`;
        group.appendChild(headingClone);
        parent.appendChild(group);
        stack.push({ level, container: group });
      } else {
        parent.appendChild(headingClone);
        const wrapper = doc.createElement(tag);
        wrapper.className = classFor(level);
        if (headingClone.id) wrapper.id = `${headingClone.id}-group`;
        parent.appendChild(wrapper);
        stack.push({ level, container: wrapper });
      }
    } else {
      if (node.nodeType === 3 && !node.textContent.trim()) return;
      stack[stack.length - 1].container.appendChild(node.cloneNode(true));
    }
  });

  return rootWrapper.outerHTML;
}