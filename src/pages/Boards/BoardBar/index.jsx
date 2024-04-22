import { Box, Button, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const MENU_STYLES = {
  color: 'white', bgcolor: 'transparent', border: 'none', paddingX: '5px', borderRadius: '4px',
  '.MuiSvgIcon-root': { color: 'white' },
  '&:hover': { bgcolor: 'primary.50' }
}
const BoardBar = () => {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderBottom: '1px solid #00bfa5',
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
      '&::-webkit-scrollbar-track': { m: 2 }

    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />} label="Vũ Đức Dũng" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />} label="Public/Private Wordspace" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />} label="Public/Private Wordspace" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />} label="Automation" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />} label="Filters" clickable />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
        >Invite</Button>
        <AvatarGroup max={4} sx={{
          gap: '10px',
          '& .MuiAvatar-root': {
            width: 34,
            height: 34,
            fontSize: 16,
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            '&:first-of-type': {
              bgcolor: '#a4b0be'
            }
          }
        }
        } >
          <Tooltip title="vuducdung">
            <Avatar alt="vuducdung" src="../../../public/avatar.jpg" />
          </Tooltip>
          <Tooltip title="vuducdung">
            <Avatar alt="vuducdung" src="../../../public/avatar.jpg" />
          </Tooltip>
          <Tooltip title="vuducdung">
            <Avatar alt="vuducdung" src="../../../public/avatar.jpg" />
          </Tooltip>
          <Tooltip title="vuducdung">
            <Avatar alt="vuducdung" src="../../../public/avatar.jpg" />
          </Tooltip>
          <Tooltip title="vuducdung">
            <Avatar alt="vuducdung" src="../../../public/avatar.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box >

  )
}

export default BoardBar
