import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Location } from '../types/location';
import Grid from "@mui/material/Grid";

type MenuItemProps = {
    location: Location
    onDelete?: () => void
}

export const MenuItem = ({ location, onDelete }: MenuItemProps) => {
    return (
        <Box
            key={location._id}
            marginY={1}
            padding={1}
            border={2}
            borderColor={location.color}
            borderRadius={3}
        >
            <Grid container>
                <Grid item xl={8}>
                    <Typography component="div">{location.label}</Typography>
                </Grid>
                <Grid item xl={4}>
                    <Typography component="div" variant="h5" position="absolute" right={20} onClick={onDelete}>&#967;</Typography>
                </Grid>
                <Grid item xl={12}>
                    <Typography component="div">&#40;{toFixedValue(location.latitude)}&deg;N, {toFixedValue(location.longitude)}&deg;W&#41;</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

const toFixedValue = (value: number) => value.toFixed(2)