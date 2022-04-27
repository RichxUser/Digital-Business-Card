import React from 'react';
import Footer from './Footer';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

export default function Main() {
    return (
        <div className="main">
            <h2>MENGUELE Richard</h2>
            <h3>FrontEnd Develloper</h3>
            <h4>www.menguelerichards.com</h4>
            <div className='button'>
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<EmailIcon />} href="mailto:menguelerichards@gmail.com">
                        Email
                    </Button>
                    <Button variant="contained" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/richard-fabrice-menguele-bengono/">
                        Linkedin
                    </Button>
                </Stack>
            </div>
            <h5>À-propos</h5>
            <p className='paragraphe'>Je suis un développeur FrontEnd avec un intérêt particulier à rendre les choses simples, à automatiser les tâches quotidiennes et partant des composants infiniment petit vers les composants infiniment grand. J'essaie de me tenir au courant de la sécurité et des meilleures pratiques, et je suis toujours à la recherche de nouvelles choses à apprendre le developement frontend, le design UI/UX.</p>
            <h5>Intérêts</h5>
            <p className='paragraphe'>Remote Freelancer, IT Consultant, Junior UI/UX Designer, Digital Marketing Google Certified, Project Manager Assistant and Solar System Specialyst.</p>

            <Footer />
        </div>
    )
}