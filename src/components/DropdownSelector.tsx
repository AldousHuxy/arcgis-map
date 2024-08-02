import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type DropdownSelectorProps = {
    defaultMap?: string
    options: { value: string; label: string }[]
    onChange?: (value: string) => void
}

export const DropdownSelector = ({ defaultMap, options, onChange }: DropdownSelectorProps) => {
    const handleChange = (e: SelectChangeEvent) => {
        if (onChange) onChange(e.target.value)
    }

    return (
        <FormControl variant="filled" sx={{
            position: 'absolute',
            bottom: 30,
            left: 10,
            zIndex: 1000 
        }}>
            <InputLabel id="label-basemap-select">Select Basemap</InputLabel>
            <Select
                labelId="label-basemap-select"
                id="basemap-select"
                label="Delect Basemap"
                value={defaultMap}
                onChange={handleChange}
                
            >
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
