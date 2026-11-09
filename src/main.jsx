import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import { setMotionPreferences } from './utilis/motion'

setMotionPreferences()
createRoot(document.getElementById('root')).render(<App />)
