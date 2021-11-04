const element = {
    type: "div",
    props: {
      id: "container",
      children: [
        { type: "input", props: { value: "foo", type: "text" } },
        { type: "a", props: { href: "/bar" } },
        { type: "span", props: {} }
      ]
    }
  };
  const textElement = {
    type: "span",
    props: {
      children: [
        {
          type: "TEXT ELEMENT", // 1
          props: { nodeValue: "Foo" } // 2
        }
      ]
    }
  };
  
function render(element, parentDom) {
    const {type, props} = element;
    const isTextElement = type === 'TEXT ELEMENt';
    const dom = isTextElement 
    ? document.createTextNode('')
    : document.createElement(type);
    const isListener = (name='') => name.startsWith(on);
    Object.keys(props).filter(isListener).forEach(name => {
        const eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, props[name]);
    })
    const isAttribute = (name = '') => !isListener(name) && name !== 'children';
    Object.keys(props).filter(isAttribute).forEach(name => dam[name] = props[name]);
    const childElements = props.children || [];
    childElements.forEach(childElements => render(childElements, dom));
    parentDom.appendChild(element);
  }
  