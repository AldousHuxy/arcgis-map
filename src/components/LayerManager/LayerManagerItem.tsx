import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';

type LayerItem = {
    text: string
    checked: boolean
    onChange: () => void
}

type LayerManagerItemProps = {
    heading?: string
    title: string
    items?: LayerItem[]
    icon: any
    openLayerManager: boolean
    setOpenLayerManager: (open: boolean) => void
}

const label = { inputProps: { 'aria-label': 'Switch' } }

export const LayerManagerItem = ({ heading, title, items, icon, openLayerManager, setOpenLayerManager }: LayerManagerItemProps) => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={<ListSubheader component="div" id="nested-list-subheader">{heading}</ListSubheader>}
        >
            <ListItemButton onClick={() => setOpenLayerManager(!openLayerManager)}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
                {openLayerManager ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openLayerManager} timeout="auto" unmountOnExit>
                {items?.map(({ text, checked, onChange }) => (
                    <List key={text} component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary={text} />
                            <Switch
                                {...label}
                                checked={checked}
                                onChange={onChange}
                            />
                        </ListItemButton>
                    </List>
                ))}
            </Collapse>
        </List>
    )
}