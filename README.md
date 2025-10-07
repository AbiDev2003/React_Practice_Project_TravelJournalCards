# Travel Journal Card Display

A responsive travel journal card display built with React and vanilla CSS. Features interactive location cards with a draggable image feature for better viewing on smaller screens.

## 🚀 Features

- Modern card-based UI design
- Fully responsive layout for all screen sizes
- Draggable/pannable images on smaller screens
- Component-based architecture
- Reusable custom React hook for drag functionality
- Clean vanilla CSS styling

## 🔗 Live Demo

 - Live vercel demo: [View Live Project](https://react-practice-project-travel-journ.vercel.app/)

## 🛠️ Tech Stacks

- React.js
- Vanilla CSS
- JavaScript ES6+

## 🎯 Key Learnings

### React Fundamentals
- JSX syntax and component structure
- Props for passing data between components
- State management with `useState`
- Mapping over arrays to render lists
- Event handling (mouse and touch events)

### CSS Skills
- Flexbox for flexible layouts
- CSS Grid for responsive structures
- Responsive design with media queries
- Transitions and animations
- Mobile-first approach

## 📁 React-tree Structure

```mermaid
    graph TD
    App.jsx
    App.jsx --> ./components/Header.jsx
    App.jsx --> ./components/Entry.jsx
    ./components/Entry.jsx --> ./components/data.js
```

## How It Works

#### Component Reusability
- Each location card is a reusable component which is called Entry.jsx.
- We take data by mapping over data.js and pass it as a prop to Entry.jsx. 
- Entry.jsx is being imported to App.jsx to make it display on the page. 

## 👤 Author

**[Abinash Dash]**

- GitHub: [@AbiDev2003](https://github.com/AbiDev2003)

---

⭐ Connect with me. Let's grow together !