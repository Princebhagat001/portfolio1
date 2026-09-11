import { createRoot } from 'react-dom/client'
import App from './App'

// Import the main CSS file containing Tailwind CSS and custom styles
import './styles.css'

// Find the <div id="root"> inside index.html and inject the React App into it
createRoot(document.getElementById('root')).render(<App />)
