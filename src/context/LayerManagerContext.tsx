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
    openGeomorphology: boolean
    setOpenGeomorphology: Dispatch<SetStateAction<boolean>>
    earthViewsToggle: boolean
    setEarthViewsToggle: Dispatch<SetStateAction<boolean>>
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
}

const LayerManagerContext = createContext({} as LayerManagerContext)

export const useLayerManager = () => useContext(LayerManagerContext)

export const LayerManagerProvider = ({ children }: LayerManagerProviderProps) => {
    const [openBoundaries, setOpenBoundaries] = useState<boolean>(false)
    const [localGovernmentsToggle, setLocalGovernmentsToggle] = useState<boolean>(false)
    const [serviceAreasToggle, setServiceAreasToggle] = useState<boolean>(false)
    const [specialDistrictsToggle, setSpecialDistrictsToggle] = useState<boolean>(false)

    const [openGeomorphology, setOpenGeomorphology] = useState<boolean>(false)
    const [earthViewsToggle, setEarthViewsToggle] = useState<boolean>(false)
    
    const [openHydrology, setOpenHydrology] = useState<boolean>(false)
    const [stream130acPointsToggle, setStream130acPointsToggle] = useState<boolean>(false)
    const [streamSegmentsToggle, setStreamSegmentsToggle] = useState<boolean>(false)
    const [streamsToggle, setStreamsToggle] = useState<boolean>(false)
    
    const [openHydraulics, setOpenHydraulics] = useState<boolean>(false)
    const [fema_NFHLToggle, setFEMA_NFHLToggle] = useState<boolean>(false)
    const [floodsplainsNonFEMAToggle, setFloodsplainsNonFEMAToggle] = useState<boolean>(false)
    const [floodSummary1965Toggle, setFloodSummary1965Toggle] = useState<boolean>(false)
    const [pmr_FIRMToggle, setPMR_FIRMToggle] = useState<boolean>(false)
    
    
    const [openMHFD, setOpenMHFD] = useState<boolean>(false)
    const [alertRainGaugesToggle, setALERTRainGaugesToggle] = useState<boolean>(false)
    const [problemsToggle, setProblemsToggle] = useState<boolean>(false)
    const [projectsToggle, setProjectsToggle] = useState<boolean>(false)
    const [projectTypesToggle, setProjectTypesToggle] = useState<boolean>(false)
    const [proposedActionsToggle, setProposedActionsToggle] = useState<boolean>(false)

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
        }}>
            {children}
        </LayerManagerContext.Provider>
    )
}