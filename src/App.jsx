import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'


function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}
function App() {
  return (
    <>
      <ModeToggle />
      <div>vuducdung</div>
      <Typography variant="h1" color="text.secondary">Hello</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <DeleteIcon />
    </>
  )
}

export default App
