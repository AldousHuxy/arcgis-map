import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type LayerManagerProviderProps = { children: ReactNode }

type LayerManagerContext = {
    openBoundaries: boolean
    setOpenBoundaries: Dispatch<SetStateAction<boolean>>
    localGovernmentsToggle: boolean
    setLocalGovernmentsToggle: Dispatch<SetStateAction<boolean>>
    serviceAreasToggle: boolean
    setServiceAreasToggle: Dispatch<SetStateAction<boolean>>
    specialDistrictsToggle: boolean
    setSpecialDistrictsToggle: Dispatch<SetStateAction<boolean>>
    openCommunityValues: boolean
    setOpenCommunityValues: Dispatch<SetStateAction<boolean>>
    cdc_SocialVulnerabilityIndexToggle: boolean
    setCDC_SocialVulnerabilityIndexToggle: Dispatch<SetStateAction<boolean>>
    cotrex_TrailsToggle: boolean
    setCOTREX_TrailsToggle: Dispatch<SetStateAction<boolean>>
    openConfluence: boolean
    setOpenConfluence: Dispatch<SetStateAction<boolean>>
    openConfluenceDev: boolean
    setOpenConfluenceDev: Dispatch<SetStateAction<boolean>>
    openConfluenceTest: boolean
    setOpenConfluenceTest: Dispatch<SetStateAction<boolean>>
    serviceTestToggle: boolean
    setServiceTestToggle: Dispatch<SetStateAction<boolean>>
    openEnvironmental: boolean
    setOpenEnvironmental: Dispatch<SetStateAction<boolean>>
    openGeomorphology: boolean
    setOpenGeomorphology: Dispatch<SetStateAction<boolean>>
    earthViewsToggle: boolean
    setEarthViewsToggle: Dispatch<SetStateAction<boolean>>
    openHosted: boolean
    setOpenHosted: Dispatch<SetStateAction<boolean>>
    beebeDraw_VectorContoursToggle: boolean
    setBeebeDraw_VectorContoursToggle: Dispatch<SetStateAction<boolean>>
    bigDryCreekTributaries_VectorContoursToggle: boolean
    setBigDryCreekTributaries_VectorContoursToggle: Dispatch<SetStateAction<boolean>>
    fhit2022Toggle: boolean
    setFHIT2022Toggle: Dispatch<SetStateAction<boolean>>
    parcelsConsolidatedToggle: boolean
    setParcelsConsolidatedToggle: Dispatch<SetStateAction<boolean>>
    parcelsLikelyToDevelopToggle: boolean
    setParcelsLikelyToDevelopToggle: Dispatch<SetStateAction<boolean>>
    service_e3477766dd49453f81d26ab5a2e1d50cToggle: boolean
    setService_e3477766dd49453f81d26ab5a2e1d50cToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_BasemapToggle: boolean
    setSPR_Adams_BasemapToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_ConnectedCommunitiesEquityToggle: boolean
    setSPR_Adams_ConnectedCommunitiesEquityToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_ConnectedCommunitiesHumanConnectivityToggle: boolean
    setSPR_Adams_ConnectedCommunitiesHumanConnectivityToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_ConnectedCommunitiesSafetyToggle: boolean
    setSPR_Adams_ConnectedCommunitiesSafetyToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_DiverseRecreationFishWildlifeToggle: boolean
    setSPR_Adams_DiverseRecreationFishWildlifeToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_DiverseRecreationLandBasedRecreationToggle: boolean
    setSPR_Adams_DiverseRecreationLandBasedRecreationToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_DiverseRecreationWhitewaterRecreationToggle: boolean
    setSPR_Adams_DiverseRecreationWhitewaterRecreationToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_RiverHealthEcologyToggle: boolean
    setSPR_Adams_RiverHealthEcologyToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_RiverHealthFloodplainToggle: boolean
    setSPR_Adams_RiverHealthFloodplainToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_RiverHealthGeomorphologyToggle: boolean
    setSPR_Adams_RiverHealthGeomorphologyToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_RiverHealthInfrastructure1Toggle: boolean
    setSPR_Adams_RiverHealthInfrastructure1Toggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_RiverHealthInfrastructure2Toggle: boolean
    setSPR_Adams_RiverHealthInfrastructure2Toggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_RiverHealthInfrastructure3Toggle: boolean
    setSPR_Adams_RiverHealthInfrastructure3Toggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_RiverHealthWaterQualityToggle: boolean
    setSPR_Adams_RiverHealthWaterQualityToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_RiverHealthWildlifeConnectivityToggle: boolean
    setSPR_Adams_RiverHealthWildlifeConnectivityToggle: Dispatch<SetStateAction<boolean>>
    spr_Adams_StudyReachesToggle: boolean
    setSPR_Adams_StudyReachesToggle: Dispatch<SetStateAction<boolean>>
    streamReachTypesToggle: boolean
    setStreamReachTypesToggle: Dispatch<SetStateAction<boolean>>
    survey123_e0e0cb74ebb24c67ae581d65f21cad57_resultsToggle: boolean
    setSurvey123_e0e0cb74ebb24c67ae581d65f21cad57_resultsToggle: Dispatch<SetStateAction<boolean>>
    watershed_USAP_ConditionToggle: boolean
    setWatershed_USAP_ConditionToggle: Dispatch<SetStateAction<boolean>>
    openHydrology: boolean
    setOpenHydrology: Dispatch<SetStateAction<boolean>>
    stream130acPointsToggle: boolean
    setStream130acPointsToggle: Dispatch<SetStateAction<boolean>>
    streamSegmentsToggle: boolean
    setStreamSegmentsToggle: Dispatch<SetStateAction<boolean>>
    streamsToggle: boolean
    setStreamsToggle: Dispatch<SetStateAction<boolean>>
    openHydraulics: boolean
    setOpenHydraulics: Dispatch<SetStateAction<boolean>>
    fema_NFHLToggle: boolean
    setFEMA_NFHLToggle: Dispatch<SetStateAction<boolean>>
    floodsplainsNonFEMAToggle: boolean
    setFloodsplainsNonFEMAToggle: Dispatch<SetStateAction<boolean>>
    floodSummary1965Toggle: boolean
    setFloodSummary1965Toggle: Dispatch<SetStateAction<boolean>>
    pmr_FIRMToggle: boolean
    setPMR_FIRMToggle: Dispatch<SetStateAction<boolean>>
    openMHFD: boolean
    setOpenMHFD: Dispatch<SetStateAction<boolean>>
    alertRainGaugesToggle: boolean
    setALERTRainGaugesToggle: Dispatch<SetStateAction<boolean>>
    problemsToggle: boolean
    setProblemsToggle: Dispatch<SetStateAction<boolean>>
    projectsToggle: boolean
    setProjectsToggle: Dispatch<SetStateAction<boolean>>
    projectTypesToggle: boolean
    setProjectTypesToggle: Dispatch<SetStateAction<boolean>>
    proposedActionsToggle: boolean
    setProposedActionsToggle: Dispatch<SetStateAction<boolean>>
    openUrbanStreamStudy: boolean
    setOpenUrbanStreamStudy: Dispatch<SetStateAction<boolean>>
    beebeDraw_DRCOGToggle: boolean
    setBeebeDraw_DRCOGToggle: Dispatch<SetStateAction<boolean>>
    beebeDraw_EnvironmentalToggle: boolean
    setBeebeDraw_EnvironmentalToggle: Dispatch<SetStateAction<boolean>>
    beebeDraw_InfrastructureToggle: boolean
    setBeebeDraw_InfrastructureToggle: Dispatch<SetStateAction<boolean>>
    beebeDraw_PlanimetricsToggle: boolean
    setBeebeDraw_PlanimetricsToggle: Dispatch<SetStateAction<boolean>>
    beebeDraw_StreamsToggle: boolean
    setBeebeDraw_StreamsToggle: Dispatch<SetStateAction<boolean>>
    bigDryCreekTribs_DRCOGToggle: boolean
    setBigDryCreekTribs_DRCOGToggle: Dispatch<SetStateAction<boolean>>
    bigDryCreekTribs_EnvironmentalToggle: boolean
    setBigDryCreekTribs_EnvironmentalToggle: Dispatch<SetStateAction<boolean>>
    bigDryCreekTribs_InfrastructureToggle: boolean
    setBigDryCreekTribs_InfrastructureToggle: Dispatch<SetStateAction<boolean>>
    bigDryCreekTribs_PlanimetricsToggle: boolean
    setBigDryCreekTribs_PlanimetricsToggle: Dispatch<SetStateAction<boolean>>
    bigDryCreekTribs_StreamsToggle: boolean
    setBigDryCreekTribs_StreamsToggle: Dispatch<SetStateAction<boolean>>
    hiddenLakeBatesLake_DRCOGToggle: boolean
    setHiddenLakeBatesLake_DRCOGToggle: Dispatch<SetStateAction<boolean>>
    hiddenLakeBatesLake_EnvironmentalToggle: boolean
    setHiddenLakeBatesLake_EnvironmentalToggle: Dispatch<SetStateAction<boolean>>
    hiddenLakeBatesLake_InfrastructureToggle: boolean
    setHiddenLakeBatesLake_InfrastructureToggle: Dispatch<SetStateAction<boolean>>
    hiddenLakeBatesLake_PlanimetricsToggle: boolean
    setHiddenLakeBatesLake_PlanimetricsToggle: Dispatch<SetStateAction<boolean>>
    hiddenLakeBatesLake_StreamsToggle: boolean
    setHiddenLakeBatesLake_StreamsToggle: Dispatch<SetStateAction<boolean>>
    littleDryCreekTribs_DRCOGToggle: boolean
    setLittleDryCreekTribs_DRCOGToggle: Dispatch<SetStateAction<boolean>>
    littleDryCreekTribs_EnvironmentalToggle: boolean
    setLittleDryCreekTribs_EnvironmentalToggle: Dispatch<SetStateAction<boolean>>
    littleDryCreekTribs_StreamsToggle: boolean
    setLittleDryCreekTribs_StreamsToggle: Dispatch<SetStateAction<boolean>>
    thirdCreekTribs_DRCOGToggle: boolean
    setThirdCreekTribs_DRCOGToggle: Dispatch<SetStateAction<boolean>>
    thirdCreekTribs_EnvironmentalToggle: boolean
    setThirdCreekTribs_EnvironmentalToggle: Dispatch<SetStateAction<boolean>>
    thirdCreekTribs_InfrastructureToggle: boolean
    setThirdCreekTribs_InfrastructureToggle: Dispatch<SetStateAction<boolean>>
    thirdCreekTribs_PlanimetricsToggle: boolean
    setThirdCreekTribs_PlanimetricsToggle: Dispatch<SetStateAction<boolean>>
    thirdCreekTribs_StreamsToggle: boolean
    setThirdCreekTribs_StreamsToggle: Dispatch<SetStateAction<boolean>>
    openUtilities: boolean
    setOpenUtilities: Dispatch<SetStateAction<boolean>>
}

const LayerManagerContext = createContext({} as LayerManagerContext)

export const useLayerManager = () => useContext(LayerManagerContext)

export const LayerManagerProvider = ({ children }: LayerManagerProviderProps) => {
    const [openBoundaries, setOpenBoundaries] = useState<boolean>(false)
    const [localGovernmentsToggle, setLocalGovernmentsToggle] = useState<boolean>(false)
    const [serviceAreasToggle, setServiceAreasToggle] = useState<boolean>(false)
    const [specialDistrictsToggle, setSpecialDistrictsToggle] = useState<boolean>(false)

    const [openCommunityValues, setOpenCommunityValues] = useState<boolean>(false)
    const [cdc_SocialVulnerabilityIndexToggle, setCDC_SocialVulnerabilityIndexToggle] = useState<boolean>(false)
    const [cotrex_TrailsToggle, setCOTREX_TrailsToggle] = useState<boolean>(false)

    const [openConfluence, setOpenConfluence] = useState<boolean>(false)
    const [openConfluenceDev, setOpenConfluenceDev] = useState<boolean>(false)
    const [openConfluenceTest, setOpenConfluenceTest] = useState<boolean>(false)
    const [serviceTestToggle, setServiceTestToggle] = useState<boolean>(false)
    const [openEnvironmental, setOpenEnvironmental] = useState<boolean>(false)

    const [openGeomorphology, setOpenGeomorphology] = useState<boolean>(false)
    const [earthViewsToggle, setEarthViewsToggle] = useState<boolean>(false)
    
    const [openHosted, setOpenHosted] = useState<boolean>(false)
    const [beebeDraw_VectorContoursToggle, setBeebeDraw_VectorContoursToggle] = useState<boolean>(false)
    const [bigDryCreekTributaries_VectorContoursToggle, setBigDryCreekTributaries_VectorContoursToggle] = useState<boolean>(false)
    const [fhit2022Toggle, setFHIT2022Toggle] = useState<boolean>(false)
    const [parcelsConsolidatedToggle, setParcelsConsolidatedToggle] = useState<boolean>(false)
    const [parcelsLikelyToDevelopToggle, setParcelsLikelyToDevelopToggle] = useState<boolean>(false)
    const [service_e3477766dd49453f81d26ab5a2e1d50cToggle, setService_e3477766dd49453f81d26ab5a2e1d50cToggle] = useState<boolean>(false)
    const [spr_Adams_BasemapToggle, setSPR_Adams_BasemapToggle] = useState<boolean>(false)
    const [spr_Adams_ConnectedCommunitiesEquityToggle, setSPR_Adams_ConnectedCommunitiesEquityToggle] = useState<boolean>(false)
    const [spr_Adams_ConnectedCommunitiesHumanConnectivityToggle, setSPR_Adams_ConnectedCommunitiesHumanConnectivityToggle] = useState<boolean>(false)
    const [spr_Adams_ConnectedCommunitiesSafetyToggle, setSPR_Adams_ConnectedCommunitiesSafetyToggle] = useState<boolean>(false)
    const [spr_Adams_DiverseRecreationFishWildlifeToggle, setSPR_Adams_DiverseRecreationFishWildlifeToggle] = useState<boolean>(false)
    const [spr_Adams_DiverseRecreationLandBasedRecreationToggle, setSPR_Adams_DiverseRecreationLandBasedRecreationToggle] = useState<boolean>(false)
    const [spr_Adams_DiverseRecreationWhitewaterRecreationToggle, setSPR_Adams_DiverseRecreationWhitewaterRecreationToggle] = useState<boolean>(false)
    const [spr_Adams_RiverHealthEcologyToggle, setSPR_Adams_RiverHealthEcologyToggle] = useState<boolean>(false)
    const [spr_Adams_RiverHealthFloodplainToggle, setSPR_Adams_RiverHealthFloodplainToggle] = useState<boolean>(false)
    const [spr_Adams_RiverHealthGeomorphologyToggle, setSPR_Adams_RiverHealthGeomorphologyToggle] = useState<boolean>(false)
    const [spr_Adams_RiverHealthInfrastructure1Toggle, setSPR_Adams_RiverHealthInfrastructure1Toggle] = useState<boolean>(false)
    const [spr_Adams_RiverHealthInfrastructure2Toggle, setSPR_Adams_RiverHealthInfrastructure2Toggle] = useState<boolean>(false)
    const [spr_Adams_RiverHealthInfrastructure3Toggle, setSPR_Adams_RiverHealthInfrastructure3Toggle] = useState<boolean>(false)
    const [spr_Adams_RiverHealthWaterQualityToggle, setSPR_Adams_RiverHealthWaterQualityToggle] = useState<boolean>(false)
    const [spr_Adams_RiverHealthWildlifeConnectivityToggle, setSPR_Adams_RiverHealthWildlifeConnectivityToggle] = useState<boolean>(false)
    const [spr_Adams_StudyReachesToggle, setSPR_Adams_StudyReachesToggle] = useState<boolean>(false)
    const [streamReachTypesToggle, setStreamReachTypesToggle] = useState<boolean>(false)
    const [survey123_e0e0cb74ebb24c67ae581d65f21cad57_resultsToggle, setSurvey123_e0e0cb74ebb24c67ae581d65f21cad57_resultsToggle] = useState<boolean>(false)
    const [watershed_USAP_ConditionToggle, setWatershed_USAP_ConditionToggle] = useState<boolean>(false)
    
    const [openHydrology, setOpenHydrology] = useState<boolean>(false)
    const [stream130acPointsToggle, setStream130acPointsToggle] = useState<boolean>(false)
    const [streamSegmentsToggle, setStreamSegmentsToggle] = useState<boolean>(false)
    const [streamsToggle, setStreamsToggle] = useState<boolean>(true)
    
    const [openHydraulics, setOpenHydraulics] = useState<boolean>(false)
    const [fema_NFHLToggle, setFEMA_NFHLToggle] = useState<boolean>(false)
    const [floodsplainsNonFEMAToggle, setFloodsplainsNonFEMAToggle] = useState<boolean>(false)
    const [floodSummary1965Toggle, setFloodSummary1965Toggle] = useState<boolean>(false)
    const [pmr_FIRMToggle, setPMR_FIRMToggle] = useState<boolean>(false)
    
    
    const [openMHFD, setOpenMHFD] = useState<boolean>(false)
    const [alertRainGaugesToggle, setALERTRainGaugesToggle] = useState<boolean>(false)
    const [problemsToggle, setProblemsToggle] = useState<boolean>(true)
    const [projectsToggle, setProjectsToggle] = useState<boolean>(true)
    const [projectTypesToggle, setProjectTypesToggle] = useState<boolean>(false)
    const [proposedActionsToggle, setProposedActionsToggle] = useState<boolean>(false)

    const [openUrbanStreamStudy, setOpenUrbanStreamStudy] = useState<boolean>(false)
    const [beebeDraw_DRCOGToggle, setBeebeDraw_DRCOGToggle] = useState<boolean>(false)
    const [beebeDraw_EnvironmentalToggle, setBeebeDraw_EnvironmentalToggle] = useState<boolean>(false)
    const [beebeDraw_InfrastructureToggle, setBeebeDraw_InfrastructureToggle] = useState<boolean>(false)
    const [beebeDraw_PlanimetricsToggle, setBeebeDraw_PlanimetricsToggle] = useState<boolean>(false)
    const [beebeDraw_StreamsToggle, setBeebeDraw_StreamsToggle] = useState<boolean>(false)
    const [bigDryCreekTribs_DRCOGToggle, setBigDryCreekTribs_DRCOGToggle] = useState<boolean>(false)
    const [bigDryCreekTribs_EnvironmentalToggle, setBigDryCreekTribs_EnvironmentalToggle] = useState<boolean>(false)
    const [bigDryCreekTribs_InfrastructureToggle, setBigDryCreekTribs_InfrastructureToggle] = useState<boolean>(false)
    const [bigDryCreekTribs_PlanimetricsToggle, setBigDryCreekTribs_PlanimetricsToggle] = useState<boolean>(false)
    const [bigDryCreekTribs_StreamsToggle, setBigDryCreekTribs_StreamsToggle] = useState<boolean>(false)
    const [hiddenLakeBatesLake_DRCOGToggle, setHiddenLakeBatesLake_DRCOGToggle] = useState<boolean>(false)
    const [hiddenLakeBatesLake_EnvironmentalToggle, setHiddenLakeBatesLake_EnvironmentalToggle] = useState<boolean>(false)
    const [hiddenLakeBatesLake_InfrastructureToggle, setHiddenLakeBatesLake_InfrastructureToggle] = useState<boolean>(false)
    const [hiddenLakeBatesLake_PlanimetricsToggle, setHiddenLakeBatesLake_PlanimetricsToggle] = useState<boolean>(false)
    const [hiddenLakeBatesLake_StreamsToggle, setHiddenLakeBatesLake_StreamsToggle] = useState<boolean>(false)
    const [littleDryCreekTribs_DRCOGToggle, setLittleDryCreekTribs_DRCOGToggle] = useState<boolean>(false)
    const [littleDryCreekTribs_EnvironmentalToggle, setLittleDryCreekTribs_EnvironmentalToggle] = useState<boolean>(false)
    const [thirdCreekTribs_DRCOGToggle, setThirdCreekTribs_DRCOGToggle] = useState<boolean>(false)
    const [thirdCreekTribs_EnvironmentalToggle, setThirdCreekTribs_EnvironmentalToggle] = useState<boolean>(false)
    const [thirdCreekTribs_InfrastructureToggle, setThirdCreekTribs_InfrastructureToggle] = useState<boolean>(false)
    const [littleDryCreekTribs_StreamsToggle, setLittleDryCreekTribs_StreamsToggle] = useState<boolean>(false)
    const [thirdCreekTribs_PlanimetricsToggle, setThirdCreekTribs_PlanimetricsToggle] = useState<boolean>(false)
    const [thirdCreekTribs_StreamsToggle, setThirdCreekTribs_StreamsToggle] = useState<boolean>(false)

    const [openUtilities, setOpenUtilities] = useState<boolean>(false)

    return (
        <LayerManagerContext.Provider value={{
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
        }}>
            {children}
        </LayerManagerContext.Provider>
    )
}