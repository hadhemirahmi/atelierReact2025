import { TextField, Button, Box, Typography } from "@mui/material";
export default function ContactForm() {
return (
<Box
component="form"
sx={{
maxWidth: 400,
margin: "auto",
mt: 4,
p: 3,
boxShadow: 3,
borderRadius: 2,
}}
>
<Typography variant="h6" gutterBottom>
Contactez-nous
</Typography>
<TextField fullWidth label="Nom" margin="normal" />
<TextField fullWidth label="Email" margin="normal" />
<TextField fullWidth label="Message" multiline rows={4} margin="normal"/>
<Button variant="contained" color="primary" sx={{ mt: 2 }}>Envoyer</Button>
</Box>
);
}