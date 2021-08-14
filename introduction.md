# Web Components

## What Are Web Components?

**Set of web platform API's** that allow us to create
custom, reusable, and encapsulated html tags to use in web
pages and web apps.

Web components do not require any special 3rd party
libraries or frameworks but can certainly be used with them.

## 3 Main Building Blocks

- Custom Elements
- Shadow DOM
- HTML Templates

### Custom Elements

- Create custom HTML tags
- Create custom class
- Lifecycle methods available

```javascript
class AppDrawer extends HTMLElement {...}

window.customElements.define('app-drawer', AppDrawer)
```

```html
<app-drawer></app-drawer>
```

#### Lifecycle Methods

- `constructor()`: Called when an instance of the element is
  created or upgrated.
- `connectedCallback()`: Called every time when the element
  is inserted into the DOM.
- `disconnectedCallback()`: Called every time the element is
  removed from the DOM.
- `attributeChangedCallback(attributeName, oldValue, newValue)`: 
  Called when an attribute is added, removed, updated, or
  replaced.

### Shadow DOM

- Used for self-contained components
- Encapsulate styles and markup
- Create with `element.attachShadow({ mode: open })`
- Creates a "shodowRoot" that we can reference and interact with

### HTML Templates

- Define the encapsulated markup of our web component
- Template tag stores markup on page
- Include both HTML and CSS in templates
- Use slots to add custom text
