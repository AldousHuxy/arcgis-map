import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ScienceIcon from '@mui/icons-material/Science';
import PublicIcon from '@mui/icons-material/Public';
import GiteIcon from '@mui/icons-material/Gite';
import WaterIcon from '@mui/icons-material/Water';
import SummarizeIcon from '@mui/icons-material/Summarize';
import WorkIcon from '@mui/icons-material/Work';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConstructionIcon from '@mui/icons-material/Construction';
import { styled, useTheme } from '@mui/material/styles';
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
        openCommunityValues,
        setOpenCommunityValues,
        cdc_SocialVulnerabilityIndexToggle,
        setCDC_SocialVulnerabilityIndexToggle,
        cotrex_TrailsToggle,
        setCOTREX_TrailsToggle,
        openConfluence,
        setOpenConfluence,
        openConfluenceDev,
        setOpenConfluenceDev,
        openConfluenceTest,
        setOpenConfluenceTest,
        serviceTestToggle,
        setServiceTestToggle,
        openEnvironmental,
        setOpenEnvironmental,
        openGeomorphology,
        setOpenGeomorphology,
        earthViewsToggle,
        setEarthViewsToggle,
        openHosted,
        setOpenHosted,
        beebeDraw_VectorContoursToggle,
        setBeebeDraw_VectorContoursToggle,
        bigDryCreekTributaries_VectorContoursToggle,
        setBigDryCreekTributaries_VectorContoursToggle,
        fhit2022Toggle,
        setFHIT2022Toggle,
        parcelsConsolidatedToggle,
        setParcelsConsolidatedToggle,
        parcelsLikelyToDevelopToggle,
        setParcelsLikelyToDevelopToggle,
        service_e3477766dd49453f81d26ab5a2e1d50cToggle,
        setService_e3477766dd49453f81d26ab5a2e1d50cToggle,
        spr_Adams_BasemapToggle,
        setSPR_Adams_BasemapToggle,
        spr_Adams_ConnectedCommunitiesEquityToggle,
        setSPR_Adams_ConnectedCommunitiesEquityToggle,
        spr_Adams_ConnectedCommunitiesHumanConnectivityToggle,
        setSPR_Adams_ConnectedCommunitiesHumanConnectivityToggle,
        spr_Adams_ConnectedCommunitiesSafetyToggle,
        setSPR_Adams_ConnectedCommunitiesSafetyToggle,
        spr_Adams_DiverseRecreationFishWildlifeToggle,
        setSPR_Adams_DiverseRecreationFishWildlifeToggle,
        spr_Adams_DiverseRecreationLandBasedRecreationToggle,
        setSPR_Adams_DiverseRecreationLandBasedRecreationToggle,
        spr_Adams_DiverseRecreationWhitewaterRecreationToggle,
        setSPR_Adams_DiverseRecreationWhitewaterRecreationToggle,
        spr_Adams_RiverHealthEcologyToggle,
        setSPR_Adams_RiverHealthEcologyToggle,
        spr_Adams_RiverHealthFloodplainToggle,
        setSPR_Adams_RiverHealthFloodplainToggle,
        spr_Adams_RiverHealthGeomorphologyToggle,
        setSPR_Adams_RiverHealthGeomorphologyToggle,
        spr_Adams_RiverHealthInfrastructure1Toggle,
        setSPR_Adams_RiverHealthInfrastructure1Toggle,
        spr_Adams_RiverHealthInfrastructure2Toggle,
        setSPR_Adams_RiverHealthInfrastructure2Toggle,
        spr_Adams_RiverHealthInfrastructure3Toggle,
        setSPR_Adams_RiverHealthInfrastructure3Toggle,
        spr_Adams_RiverHealthWaterQualityToggle,
        setSPR_Adams_RiverHealthWaterQualityToggle,
        spr_Adams_RiverHealthWildlifeConnectivityToggle,
        setSPR_Adams_RiverHealthWildlifeConnectivityToggle,
        spr_Adams_StudyReachesToggle,
        setSPR_Adams_StudyReachesToggle,
        streamReachTypesToggle,
        setStreamReachTypesToggle,
        survey123_e0e0cb74ebb24c67ae581d65f21cad57_resultsToggle,
        setSurvey123_e0e0cb74ebb24c67ae581d65f21cad57_resultsToggle,
        watershed_USAP_ConditionToggle,
        setWatershed_USAP_ConditionToggle,
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
        setProposedActionsToggle,
        openUrbanStreamStudy,
        setOpenUrbanStreamStudy,
        beebeDraw_DRCOGToggle,
        setBeebeDraw_DRCOGToggle,
        beebeDraw_EnvironmentalToggle,
        setBeebeDraw_EnvironmentalToggle,
        beebeDraw_InfrastructureToggle,
        setBeebeDraw_InfrastructureToggle,
        beebeDraw_PlanimetricsToggle,
        setBeebeDraw_PlanimetricsToggle,
        beebeDraw_StreamsToggle,
        setBeebeDraw_StreamsToggle,
        bigDryCreekTribs_DRCOGToggle,
        setBigDryCreekTribs_DRCOGToggle,
        bigDryCreekTribs_EnvironmentalToggle,
        setBigDryCreekTribs_EnvironmentalToggle,
        bigDryCreekTribs_InfrastructureToggle,
        setBigDryCreekTribs_InfrastructureToggle,
        bigDryCreekTribs_PlanimetricsToggle,
        setBigDryCreekTribs_PlanimetricsToggle,
        bigDryCreekTribs_StreamsToggle,
        setBigDryCreekTribs_StreamsToggle,
        hiddenLakeBatesLake_DRCOGToggle,
        setHiddenLakeBatesLake_DRCOGToggle,
        hiddenLakeBatesLake_EnvironmentalToggle,
        setHiddenLakeBatesLake_EnvironmentalToggle,
        hiddenLakeBatesLake_InfrastructureToggle,
        setHiddenLakeBatesLake_InfrastructureToggle,
        hiddenLakeBatesLake_PlanimetricsToggle,
        setHiddenLakeBatesLake_PlanimetricsToggle,
        hiddenLakeBatesLake_StreamsToggle,
        setHiddenLakeBatesLake_StreamsToggle,
        littleDryCreekTribs_DRCOGToggle,
        setLittleDryCreekTribs_DRCOGToggle,
        littleDryCreekTribs_EnvironmentalToggle,
        setLittleDryCreekTribs_EnvironmentalToggle,
        littleDryCreekTribs_StreamsToggle,
        setLittleDryCreekTribs_StreamsToggle,
        thirdCreekTribs_DRCOGToggle,
        setThirdCreekTribs_DRCOGToggle,
        thirdCreekTribs_EnvironmentalToggle,
        setThirdCreekTribs_EnvironmentalToggle,
        thirdCreekTribs_InfrastructureToggle,
        setThirdCreekTribs_InfrastructureToggle,
        thirdCreekTribs_PlanimetricsToggle,
        setThirdCreekTribs_PlanimetricsToggle,
        thirdCreekTribs_StreamsToggle,
        setThirdCreekTribs_StreamsToggle,
        openUtilities,
        setOpenUtilities
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
                title="CommunityValues"
                items={[
                    { text: 'CDC_SocialVulnerabilityIndex', checked: cdc_SocialVulnerabilityIndexToggle, onChange: () => setCDC_SocialVulnerabilityIndexToggle(!cdc_SocialVulnerabilityIndexToggle) },
                    { text: 'COTREX_Trails', checked: cotrex_TrailsToggle, onChange: () => setCOTREX_TrailsToggle(!cotrex_TrailsToggle) }
                ]}
                icon={<GroupsIcon />}
                openLayerManager={openCommunityValues}
                setOpenLayerManager={setOpenCommunityValues}
            />
            <LayerManagerItem
                title="Confluence"
                icon={<ComputerIcon />}
                openLayerManager={openConfluence}
                setOpenLayerManager={setOpenConfluence}
            />
            <LayerManagerItem
                title="ConfluenceDev"
                icon={<DeveloperModeIcon />}
                openLayerManager={openConfluenceDev}
                setOpenLayerManager={setOpenConfluenceDev}
            />
            <LayerManagerItem
                title="ConfluenceTest"
                items={[
                    { text: 'ServiceTest', checked: serviceTestToggle, onChange: () => setServiceTestToggle(!serviceTestToggle) },
                ]}
                icon={<ScienceIcon />}
                openLayerManager={openConfluenceTest}
                setOpenLayerManager={setOpenConfluenceTest}
            />
            <LayerManagerItem
                title="Environmental"
                items={[
                    { text: 'USFWS_BlockClearanceZones', checked: earthViewsToggle, onChange: () => setEarthViewsToggle(!earthViewsToggle) },
                ]}
                icon={<AccountBalanceIcon />}
                openLayerManager={openEnvironmental}
                setOpenLayerManager={setOpenEnvironmental}
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
                title="Hosted"
                items={[
                    { text: 'BeebeDraw_VectorContours', checked: beebeDraw_VectorContoursToggle, onChange: () => setBeebeDraw_VectorContoursToggle(!beebeDraw_VectorContoursToggle) },
                    { text: 'BigDryCreekTributaries_VectorContours', checked: bigDryCreekTributaries_VectorContoursToggle, onChange: () => setBigDryCreekTributaries_VectorContoursToggle(!bigDryCreekTributaries_VectorContoursToggle) },
                    { text: 'FHIT2022', checked: fhit2022Toggle, onChange: () => setFHIT2022Toggle(!fhit2022Toggle) },
                    { text: 'ParcelsConsolidated', checked: parcelsConsolidatedToggle, onChange: () => setParcelsConsolidatedToggle(!parcelsConsolidatedToggle) },
                    { text: 'ParcelsLikelyToDevelop', checked: parcelsLikelyToDevelopToggle, onChange: () => setParcelsLikelyToDevelopToggle(!parcelsLikelyToDevelopToggle) },
                    { text: 'service_e3477766dd49453f81d26ab5a2e1d50c', checked: service_e3477766dd49453f81d26ab5a2e1d50cToggle, onChange: () => setService_e3477766dd49453f81d26ab5a2e1d50cToggle(!service_e3477766dd49453f81d26ab5a2e1d50cToggle) },
                    { text: 'SPR_Adams_Basemap', checked: spr_Adams_BasemapToggle, onChange: () => setSPR_Adams_BasemapToggle(!spr_Adams_BasemapToggle) },
                    { text: 'SPR_Adams_ConnectedCommunitiesEquity', checked: spr_Adams_ConnectedCommunitiesEquityToggle, onChange: () => setSPR_Adams_ConnectedCommunitiesEquityToggle(!spr_Adams_ConnectedCommunitiesEquityToggle) },
                    { text: 'SPR_Adams_ConnectedCommunitiesHumanConnectivity', checked: spr_Adams_ConnectedCommunitiesHumanConnectivityToggle, onChange: () => setSPR_Adams_ConnectedCommunitiesHumanConnectivityToggle(!spr_Adams_ConnectedCommunitiesHumanConnectivityToggle) },
                    { text: 'SPR_Adams_ConnectedCommunitiesSafety', checked: spr_Adams_ConnectedCommunitiesSafetyToggle, onChange: () => setSPR_Adams_ConnectedCommunitiesSafetyToggle(!spr_Adams_ConnectedCommunitiesSafetyToggle) },
                    { text: 'SPR_Adams_DiverseRecreationFishWildlife', checked: spr_Adams_DiverseRecreationFishWildlifeToggle, onChange: () => setSPR_Adams_DiverseRecreationFishWildlifeToggle(!spr_Adams_DiverseRecreationFishWildlifeToggle) },
                    { text: 'SPR_Adams_DiverseRecreationLandBasedRecreation', checked: spr_Adams_DiverseRecreationLandBasedRecreationToggle, onChange: () => setSPR_Adams_DiverseRecreationLandBasedRecreationToggle(!spr_Adams_DiverseRecreationLandBasedRecreationToggle) },
                    { text: 'SPR_Adams_DiverseRecreationWhitewaterRecreation', checked: spr_Adams_DiverseRecreationWhitewaterRecreationToggle, onChange: () => setSPR_Adams_DiverseRecreationWhitewaterRecreationToggle(!spr_Adams_DiverseRecreationWhitewaterRecreationToggle) },
                    { text: 'SPR_Adams_RiverHealthEcology', checked: spr_Adams_RiverHealthEcologyToggle, onChange: () => setSPR_Adams_RiverHealthEcologyToggle(!spr_Adams_RiverHealthEcologyToggle) },
                    { text: 'SPR_Adams_RiverHealthFloodplain', checked: spr_Adams_RiverHealthFloodplainToggle, onChange: () => setSPR_Adams_RiverHealthFloodplainToggle(!spr_Adams_RiverHealthFloodplainToggle) },
                    { text: 'SPR_Adams_RiverHealthGeomorphology', checked: spr_Adams_RiverHealthGeomorphologyToggle, onChange: () => setSPR_Adams_RiverHealthGeomorphologyToggle(!spr_Adams_RiverHealthGeomorphologyToggle) },
                    { text: 'SPR_Adams_RiverHealthInfrastructure1', checked: spr_Adams_RiverHealthInfrastructure1Toggle, onChange: () => setSPR_Adams_RiverHealthInfrastructure1Toggle(!spr_Adams_RiverHealthInfrastructure1Toggle) },
                    { text: 'SPR_Adams_RiverHealthInfrastructure2', checked: spr_Adams_RiverHealthInfrastructure2Toggle, onChange: () => setSPR_Adams_RiverHealthInfrastructure2Toggle(!spr_Adams_RiverHealthInfrastructure2Toggle) },
                    { text: 'SPR_Adams_RiverHealthInfrastructure3', checked: spr_Adams_RiverHealthInfrastructure3Toggle, onChange: () => setSPR_Adams_RiverHealthInfrastructure3Toggle(!spr_Adams_RiverHealthInfrastructure3Toggle) },
                    { text: 'SPR_Adams_RiverHealthWaterQuality', checked: spr_Adams_RiverHealthWaterQualityToggle, onChange: () => setSPR_Adams_RiverHealthWaterQualityToggle(!spr_Adams_RiverHealthWaterQualityToggle) },
                    { text: 'SPR_Adams_RiverHealthWildlifeConnectivity', checked: spr_Adams_RiverHealthWildlifeConnectivityToggle, onChange: () => setSPR_Adams_RiverHealthWildlifeConnectivityToggle(!spr_Adams_RiverHealthWildlifeConnectivityToggle) },
                    { text: 'SPR_Adams_StudyReaches', checked: spr_Adams_StudyReachesToggle, onChange: () => setSPR_Adams_StudyReachesToggle(!spr_Adams_StudyReachesToggle) },
                    { text: 'StreamReachTypes', checked: streamReachTypesToggle, onChange: () => setStreamReachTypesToggle(!streamReachTypesToggle) },
                    { text: 'survey123_e0e0cb74ebb24c67ae581d65f21cad57_results', checked: survey123_e0e0cb74ebb24c67ae581d65f21cad57_resultsToggle, onChange: () => setSurvey123_e0e0cb74ebb24c67ae581d65f21cad57_resultsToggle(!survey123_e0e0cb74ebb24c67ae581d65f21cad57_resultsToggle) },
                    { text: 'Watershed_USAP_Condition', checked: watershed_USAP_ConditionToggle, onChange: () => setWatershed_USAP_ConditionToggle(!watershed_USAP_ConditionToggle) }
                ]}
                icon={<GiteIcon />}
                openLayerManager={openHosted}
                setOpenLayerManager={setOpenHosted}
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
            <LayerManagerItem
                title="UrbanStreamStudy"
                items={[
                    { text: 'BeebeDraw_DRCOG', checked: beebeDraw_DRCOGToggle, onChange: () => setBeebeDraw_DRCOGToggle(!beebeDraw_DRCOGToggle) },
                    { text: 'BeebeDraw_Environmental', checked: beebeDraw_EnvironmentalToggle, onChange: () => setBeebeDraw_EnvironmentalToggle(!beebeDraw_EnvironmentalToggle) },
                    { text: 'BeebeDraw_Infrastructure', checked: beebeDraw_InfrastructureToggle, onChange: () => setBeebeDraw_InfrastructureToggle(!beebeDraw_InfrastructureToggle) },
                    { text: 'BeebeDraw_Planimetrics', checked: beebeDraw_PlanimetricsToggle, onChange: () => setBeebeDraw_PlanimetricsToggle(!beebeDraw_PlanimetricsToggle) },
                    { text: 'BeebeDraw_Streams', checked: beebeDraw_StreamsToggle, onChange: () => setBeebeDraw_StreamsToggle(!beebeDraw_StreamsToggle) },
                    { text: 'BigDryCreekTribs_DRCOG', checked: bigDryCreekTribs_DRCOGToggle, onChange: () => setBigDryCreekTribs_DRCOGToggle(!bigDryCreekTribs_DRCOGToggle) },
                    { text: 'BigDryCreekTribs_Environmental', checked: bigDryCreekTribs_EnvironmentalToggle, onChange: () => setBigDryCreekTribs_EnvironmentalToggle(!bigDryCreekTribs_EnvironmentalToggle) },
                    { text: 'BigDryCreekTribs_Infrastructure', checked: bigDryCreekTribs_InfrastructureToggle, onChange: () => setBigDryCreekTribs_InfrastructureToggle(!bigDryCreekTribs_InfrastructureToggle) },
                    { text: 'BigDryCreekTribs_Planimetrics', checked: bigDryCreekTribs_PlanimetricsToggle, onChange: () => setBigDryCreekTribs_PlanimetricsToggle(!bigDryCreekTribs_PlanimetricsToggle) },
                    { text: 'BigDryCreekTribs_Streams', checked: bigDryCreekTribs_StreamsToggle, onChange: () => setBigDryCreekTribs_StreamsToggle(!bigDryCreekTribs_StreamsToggle) },
                    { text: 'HiddenLakeBatesLake_DRCOG', checked: hiddenLakeBatesLake_DRCOGToggle, onChange: () => setHiddenLakeBatesLake_DRCOGToggle(!hiddenLakeBatesLake_DRCOGToggle) },
                    { text: 'HiddenLakeBatesLake_Environmental', checked: hiddenLakeBatesLake_EnvironmentalToggle, onChange: () => setHiddenLakeBatesLake_EnvironmentalToggle(!hiddenLakeBatesLake_EnvironmentalToggle) },
                    { text: 'HiddenLakeBatesLake_Infrastructure', checked: hiddenLakeBatesLake_InfrastructureToggle, onChange: () => setHiddenLakeBatesLake_InfrastructureToggle(!hiddenLakeBatesLake_InfrastructureToggle) },
                    { text: 'HiddenLakeBatesLake_Planimetrics', checked: hiddenLakeBatesLake_PlanimetricsToggle, onChange: () => setHiddenLakeBatesLake_PlanimetricsToggle(!hiddenLakeBatesLake_PlanimetricsToggle) },
                    { text: 'HiddenLakeBatesLake_Streams', checked: hiddenLakeBatesLake_StreamsToggle, onChange: () => setHiddenLakeBatesLake_StreamsToggle(!hiddenLakeBatesLake_StreamsToggle) },
                    { text: 'LittleDryCreekTribs_DRCOG', checked: littleDryCreekTribs_DRCOGToggle, onChange: () => setLittleDryCreekTribs_DRCOGToggle(!littleDryCreekTribs_DRCOGToggle) },
                    { text: 'LittleDryCreekTribs_Environmental', checked: littleDryCreekTribs_EnvironmentalToggle, onChange: () => setLittleDryCreekTribs_EnvironmentalToggle(!littleDryCreekTribs_EnvironmentalToggle) },
                    { text: 'LittleDryCreekTribs_Streams', checked: littleDryCreekTribs_StreamsToggle, onChange: () => setLittleDryCreekTribs_StreamsToggle(!littleDryCreekTribs_StreamsToggle) },
                    { text: 'ThirdCreekTribs_DRCOG', checked: thirdCreekTribs_DRCOGToggle, onChange: () => setThirdCreekTribs_DRCOGToggle(!thirdCreekTribs_DRCOGToggle) },
                    { text: 'ThirdCreekTribs_Environmental', checked: thirdCreekTribs_EnvironmentalToggle, onChange: () => setThirdCreekTribs_EnvironmentalToggle(!thirdCreekTribs_EnvironmentalToggle) },
                    { text: 'ThirdCreekTribs_Infrastructure', checked: thirdCreekTribs_InfrastructureToggle, onChange: () => setThirdCreekTribs_InfrastructureToggle(!thirdCreekTribs_InfrastructureToggle) },
                    { text: 'ThirdCreekTribs_Planimetrics', checked: thirdCreekTribs_PlanimetricsToggle, onChange: () => setThirdCreekTribs_PlanimetricsToggle(!thirdCreekTribs_PlanimetricsToggle) },
                    { text: 'ThirdCreekTribs_Streams', checked: thirdCreekTribs_StreamsToggle, onChange: () => setThirdCreekTribs_StreamsToggle(!thirdCreekTribs_StreamsToggle) },
                ]}
                icon={<MenuBookIcon />}
                openLayerManager={openUrbanStreamStudy}
                setOpenLayerManager={setOpenUrbanStreamStudy}
                />
            <LayerManagerItem
                title="Utilities"
                icon={<ConstructionIcon />}
                openLayerManager={openUtilities}
                setOpenLayerManager={setOpenUtilities}
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