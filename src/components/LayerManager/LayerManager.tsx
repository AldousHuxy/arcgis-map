import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import WaterIcon from '@mui/icons-material/Water';
import SummarizeIcon from '@mui/icons-material/Summarize';
import WorkIcon from '@mui/icons-material/Work';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { LayerManagerItem } from './LayerManagerItem';
import { useLayerManager } from '../../context/LayerManagerContext';

type LayerManagerProps = {
    open: boolean
    handleDrawerClose: () => void
    drawerWidth: number
}

export const LayerManager = ({ open, handleDrawerClose, drawerWidth }: LayerManagerProps) => {
    const theme = useTheme()
    const {
        openBoundaries,
        setOpenBoundaries,
        localGovernmentsToggle,
        setLocalGovernmentsToggle,
        serviceAreasToggle,
        setServiceAreasToggle,
        specialDistrictsToggle,
        setSpecialDistrictsToggle,
        openGeomorphology,
        setOpenGeomorphology,
        earthViewsToggle,
        setEarthViewsToggle,
        openHydrology,
        setOpenHydrology,
        stream130acPointsToggle,
        setStream130acPointsToggle,
        streamSegmentsToggle,
        setStreamSegmentsToggle,
        streamsToggle,
        setStreamsToggle,
        openHydraulics,
        setOpenHydraulics,
        fema_NFHLToggle,
        setFEMA_NFHLToggle,
        floodsplainsNonFEMAToggle,
        setFloodsplainsNonFEMAToggle,
        floodSummary1965Toggle,
        setFloodSummary1965Toggle,
        pmr_FIRMToggle,
        setPMR_FIRMToggle,
        openMHFD,
        setOpenMHFD,
        alertRainGaugesToggle,
        setALERTRainGaugesToggle,
        problemsToggle,
        setProblemsToggle,
        projectsToggle,
        setProjectsToggle,
        projectTypesToggle,
        setProjectTypesToggle,
        proposedActionsToggle,
        setProposedActionsToggle
    } = useLayerManager()

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <LayerManagerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </LayerManagerHeader>
            <Divider />
            <LayerManagerItem
                heading="Layer Manager"
                title="Boundaries"
                items={[
                    { text: 'Local Governments', checked: localGovernmentsToggle, onChange: () => setLocalGovernmentsToggle(!localGovernmentsToggle) },
                    { text: 'Service Areas', checked: serviceAreasToggle, onChange: () => setServiceAreasToggle(!serviceAreasToggle) },
                    { text: 'Special Districts', checked: specialDistrictsToggle, onChange: () => setSpecialDistrictsToggle(!specialDistrictsToggle) }
                ]}
                icon={<AccountBalanceIcon />}
                openLayerManager={openBoundaries}
                setOpenLayerManager={setOpenBoundaries}
            />
            <LayerManagerItem
                title="Geomorphology"
                items={[
                    { text: 'Earth Views', checked: earthViewsToggle, onChange: () => setEarthViewsToggle(!earthViewsToggle) }
                ]}
                icon={<PublicIcon />}
                openLayerManager={openGeomorphology}
                setOpenLayerManager={setOpenGeomorphology}
            />
            <LayerManagerItem
                title="Hydrology"
                items={[
                    { text: 'Stream 130ac Points', checked: stream130acPointsToggle, onChange: () => setStream130acPointsToggle(!stream130acPointsToggle) },
                    { text: 'Stream Segments', checked: streamSegmentsToggle, onChange: () => setStreamSegmentsToggle(!streamSegmentsToggle) },
                    { text: 'Streams', checked: streamsToggle, onChange: () => setStreamsToggle(!streamsToggle) }
                ]}
                icon={<WaterIcon />}
                openLayerManager={openHydrology}
                setOpenLayerManager={setOpenHydrology}
            />
            <LayerManagerItem
                title="Hydraulics"
                items={[
                    { text: 'FEMA NFHL', checked: fema_NFHLToggle, onChange: () => setFEMA_NFHLToggle(!fema_NFHLToggle) },
                    { text: 'Floodsplains Non-FEMA', checked: floodsplainsNonFEMAToggle, onChange: () => setFloodsplainsNonFEMAToggle(!floodsplainsNonFEMAToggle) },
                    { text: 'Flood Summary 1965', checked: floodSummary1965Toggle, onChange: () => setFloodSummary1965Toggle(!floodSummary1965Toggle) },
                    { text: 'PMR FIRM', checked: pmr_FIRMToggle, onChange: () => setPMR_FIRMToggle(!pmr_FIRMToggle) }
                ]}
                icon={<SummarizeIcon />}
                openLayerManager={openHydraulics}
                setOpenLayerManager={setOpenHydraulics}
            />
            <LayerManagerItem
                title="MHFD"
                items={[
                    { text: 'ALERT Rain Gauges', checked: alertRainGaugesToggle, onChange: () => setALERTRainGaugesToggle(!alertRainGaugesToggle) },
                    { text: 'Problems', checked: problemsToggle, onChange: () => setProblemsToggle(!problemsToggle) },
                    { text: 'Projects', checked: projectsToggle, onChange: () => setProjectsToggle(!projectsToggle) },
                    { text: 'Project Types', checked: projectTypesToggle, onChange: () => setProjectTypesToggle(!projectTypesToggle) },
                    { text: 'Proposed Actions', checked: proposedActionsToggle, onChange: () => setProposedActionsToggle(!proposedActionsToggle) }
                ]}
                icon={<WorkIcon />}
                openLayerManager={openMHFD}
                setOpenLayerManager={setOpenMHFD}
            />
        </Drawer>
    )
}

export const LayerManagerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}))