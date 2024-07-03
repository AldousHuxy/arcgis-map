import Box from "@mui/material/Box"
import { Location } from "../types/location"
import Typography from "@mui/material/Typography"
import { MenuItem } from "./MenuItem"

type MapMenuProps = {
    locations: Location[]
}

export const MapMenu = ({ locations }: MapMenuProps) => {
    return (
        <Box
            position="absolute"
            height="90vh"
            bottom={20}
            right={20}
            zIndex={1000}
            width="30%"
            bgcolor="whitesmoke"
            borderRadius={3}
            sx={{ opacity: '75%' }}
        >
            <Box paddingX={1}>
                <Typography component="div" variant="h5" align="center">Map Menu</Typography>
                {locations.map(location => (
                    <MenuItem key={location._id} location={location} />
                ))}
            </Box>
        </Box>
    )
}

