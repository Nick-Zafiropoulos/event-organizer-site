'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function Setup() {
    return (
        <Box>
            <Box
                className='backgroundClassSetup'
                sx={{ height: { xs: '200vw', md: '100%' }, width: { xs: 'cover', md: '100%' }, p: { xs: 2, md: 10 } }}
            >
                <Box
                    component={motion.div}
                    initial={{ x: '0%', y: '0%', opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
                    animate={{ x: '0%', y: '0%', opacity: 1 }}
                    sx={{ display: 'flex' }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '55px' },

                                flexWrap: 'wrap',
                                width: '70%',

                                ml: { xs: 2, md: 5 },
                            }}
                        >
                            <b>Getting Started</b>
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}></Box>
                </Box>

                <Box
                    sx={{ display: 'flex', justifyContent: 'center', pl: 5, pr: 5, pb: 5, pt: 2, mt: 10 }}
                    component={motion.div}
                    className='frosted-docs'
                    initial={{ x: '0%', y: '-30px', opacity: 0 }}
                    animate={{ x: '0%', y: '0%', opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{}}>
                        <Typography align='left' sx={{ mt: 5, mr: 5, color: 'white' }}>
                            To use Event Organizer with your own Discord server, you will need to host the application
                            and connect it to your server. This page explains what you will need to do in order to
                            complete the setup process.
                        </Typography>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '30px' },

                                flexWrap: 'wrap',
                                width: '50%',
                                mb: 2,
                                mt: 6,
                            }}
                        >
                            <u>Hosting Options</u>
                        </Typography>
                        <Typography align='left' sx={{ mt: 5, mr: 5, color: 'white' }}>
                            You have a couple of options when it comes to hosting Event Organizer. The first is to host
                            the application on a local machine which you are responsible for keeping running. This is
                            easier to set up and run, however will require you to keep it running if you wish to use
                            Event Organizer frequently. The second option is to host Event Organizer remotely through a
                            hosting service (i.e. AWS, Azure, Railway, etc.). Remote hosting will allow you run the
                            application 24/7, but may incur fees from the service provider depending on your usage.
                        </Typography>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '25px' },

                                flexWrap: 'wrap',
                                width: '50%',
                                mb: 2,
                                mt: 6,
                            }}
                        >
                            <b>Local Hosting:</b>
                        </Typography>

                        <Typography align='left' sx={{ mr: 5, color: 'white' }}>
                            Running Event Organizer from a local machine can be accomplished by downloading the code
                            from the
                            <a href='https://github.com/Nick-Zafiropoulos/discord-event-organizer'>
                                {' '}
                                <u>GitHub repository</u>
                            </a>
                            .<br></br>
                            <br></br>
                            Now that the code is on your machine, you will need to create a &quot;.env&quot; file in the
                            same folder as the &quot;index.js&quot; file for the project. This &quot;.env&quot; file
                            will contain the information Event Organizer needs to connect to your specific Discord
                            server. The &quot;.env&quot; file needs to contain the following information:
                            <br></br>
                            <br></br>
                        </Typography>
                        <Typography align='left' sx={{ ml: 10, mr: 5, color: 'white' }}>
                            <b>BOT_TOKEN = YOUR_TOKEN_HERE</b>
                            <br></br>
                            <i>
                                This can be created by following the instructions on the{' '}
                                <a href='https://discord.com/developers/docs/getting-started'>
                                    {' '}
                                    <u>Discord Developer Page</u>
                                </a>
                                &nbsp;to create the Event Organizer &quot;bot user&quot;. Make sure to follow the
                                &quot;Adding scopes and bot permissions&quot; and &quot;Installing your app&quot;
                                sections as well in order to authorize Event Organizer on your Discord server.
                            </i>
                            <br></br>
                            <br></br>
                            <b>CLIENT_ID = YOUR_CLIENT_ID_HERE</b>
                            <br></br>
                            <i>
                                After your app has been created through the Discord Developer Page, look for your Event
                                Organizer&apos;s &quot;Application ID&quot; in the General Information section of your
                                app&apos;s page.
                            </i>
                            <br></br>
                            <br></br>
                            <b>GUILD_ID = YOUR_GUILD_ID_HERE</b>
                            <br></br>
                            <i>
                                This can be found by enabling Developer Mode (Settings -&gt; Advanced -&gt; Developer
                                Mode) and then right-clicking your Server&apos;s name in the Discord sidebar, and
                                pressing &quot;Copy Server ID&quot;.
                            </i>
                            <br></br>
                            <br></br>
                            <b>EVENT_CHANNEL = YOUR_CHANNEL_ID_HERE</b>
                            <br></br>
                            <i>
                                With Developer Mode turned on, right-click the channel that you want Event Organizer to
                                post polls in and press &quot;Copy Channel ID&quot;.
                            </i>
                        </Typography>
                        <br></br>

                        <Typography align='left' sx={{ mr: 5, color: 'white' }}>
                            With the &quot;.env&quot; file set up, save it and run the build using an editor such as
                            Visual Studio Code or similar. If everything is set up correctly, Event Organizer will
                            appear online in your Discord server and be ready to use!
                        </Typography>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '25px' },

                                flexWrap: 'wrap',
                                width: '50%',
                                mb: 2,
                                mt: 6,
                            }}
                        >
                            <b>Remote Hosting:</b>
                        </Typography>
                        <Typography align='left' sx={{ mr: 5, color: 'white' }}>
                            Running Event Organizer on a remote hosting service can be accomplished by downloading the
                            code from the
                            <a href='https://github.com/Nick-Zafiropoulos/discord-event-organizer'>
                                {' '}
                                <u>GitHub repository</u>
                            </a>
                            &nbsp;and then uploading it to your preferred hosting service. An explanation of how to use
                            the various hosting services available is beyond the scope of this setup guide, however
                            regardless of which hosting service you choose to utilize you will need to provide it with
                            environment variables. These are the same as the variables in the &quot;.env&quot; set up in
                            the &quot;Local Hosting&quot; section above, and are defined as follows:<br></br>
                            <br></br>
                        </Typography>
                        <Typography align='left' sx={{ ml: 10, mr: 5, color: 'white' }}>
                            <b>BOT_TOKEN = YOUR_TOKEN_HERE</b>
                            <br></br>
                            <i>
                                This can be created by following the instructions on the{' '}
                                <a href='https://discord.com/developers/docs/getting-started'>
                                    {' '}
                                    <u>Discord Developer Page</u>
                                </a>
                                &nbsp;to create the Event Organizer &quot;bot user&quot;. Make sure to follow the
                                &quot;Adding scopes and bot permissions&quot; and &quot;Installing your app&quot;
                                sections as well in order to authorize Event Organizer on your Discord server.
                            </i>
                            <br></br>
                            <br></br>
                            <b>CLIENT_ID = YOUR_CLIENT_ID_HERE</b>
                            <br></br>
                            <i>
                                After your app has been created through the Discord Developer Page, look for your Event
                                Organizer&apos;s &quot;Application ID&quot; in the General Information section of your
                                app&apos;s page.
                            </i>
                            <br></br>
                            <br></br>
                            <b>GUILD_ID = YOUR_GUILD_ID_HERE</b>
                            <br></br>
                            <i>
                                This can be found by enabling Developer Mode (Settings -&gt; Advanced -&gt; Developer
                                Mode) and then right-clicking your Server&apos;s name in the Discord sidebar, and
                                pressing &quot;Copy Server ID&quot;.
                            </i>
                            <br></br>
                            <br></br>
                            <b>EVENT_CHANNEL = YOUR_CHANNEL_ID_HERE</b>
                            <br></br>
                            <i>
                                With Developer Mode turned on, right-click the channel that you want Event Organizer to
                                post polls in and press &quot;Copy Channel ID&quot;.
                            </i>
                            <br></br>
                            <br></br>
                        </Typography>

                        <Typography align='left' sx={{ mr: 5, color: 'white' }}>
                            With the above environment variables provided to your hosting service of choice, the Event
                            Organizer application should be up and running!
                            <br></br>
                            <br></br>
                        </Typography>
                        <Box
                            component={motion.div}
                            initial={{ x: '0%', y: '-10%', opacity: 0, scale: 1 }}
                            animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 1.1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 5 }}
                        >
                            <Box
                                className='statement'
                                sx={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}
                            >
                                <b>All Set Up? Make Your First Event Organizer Poll!</b>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 5 }}>
                                <Button
                                    href='https://eventorganizer.up.railway.app/docs'
                                    color='secondary'
                                    sx={{ fontSize: '15px', display: 'flex', alignItems: 'center' }}
                                    variant='contained'
                                    endIcon={<PlayCircleOutlineIcon />}
                                >
                                    Show Me How
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 3,

                    backgroundColor: 'black',
                    width: '100%',
                }}
            >
                <Box className='footerText' sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                    <EmailIcon />
                    &nbsp;
                    <a href='mailto: nick.zaff@gmail.com'>Get In Contact</a>
                </Box>
                <Box className='footerText' sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                    <GitHubIcon />
                    &nbsp;GitHub:&nbsp;
                    <a href='https://github.com/Nick-Zafiropoulos/discord-event-organizer'>Event Organizer Repo</a>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <a href='https://github.com/Nick-Zafiropoulos/event-organizer-site'>Website Repo</a>
                </Box>
            </Box>
        </Box>
    );
}
