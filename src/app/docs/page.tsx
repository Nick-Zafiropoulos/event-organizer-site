'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Docs() {
    return (
        <Box>
            <Box
                className='backgroundClassDocs'
                sx={{ height: { xs: 'cover', md: '100%' }, width: { xs: '100vw', md: '100%' }, p: { xs: 2, md: 10 } }}
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
                                fontSize: { xs: '30px', md: '55px' },

                                flexWrap: 'wrap',
                                width: { xs: '100%', md: '70%' },

                                ml: { xs: 2, md: 5 },
                            }}
                        >
                            <b>Using Event Organizer</b>
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}></Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        pl: { xs: 3, md: 5 },
                        pr: { xs: 3, md: 5 },
                        pb: { xs: 3, md: 5 },
                        pt: { xs: 3, md: 5 },
                        mt: { xs: 2, md: 10 },
                    }}
                    component={motion.div}
                    className='frosted-docs'
                    initial={{ x: '0%', y: '-40px', opacity: 0 }}
                    animate={{ x: '0%', y: '0%', opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{}}>
                        <Typography align='left' sx={{ mt: { xs: 0, md: 3 }, mr: { xs: 2, md: 5 }, color: 'white' }}>
                            <i>
                                This page documents how to use Event Organizer once it is running on your Discord
                                server. For information on setting up the application to run on your server, please
                                visit the Setup page.
                            </i>
                        </Typography>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '20px', md: '30px' },

                                flexWrap: 'wrap',
                                width: { xs: '100%', md: '50%' },
                                mb: 2,
                                mt: 6,
                            }}
                        >
                            <u>The Poll Command</u>
                        </Typography>
                        <Typography align='left' sx={{ color: 'white' }}>
                            Event Organizer is activated by using the &quot;/poll&quot; command in the channel you wish
                            to start your scheduling poll in. After entering the command, you will need to enter a few
                            parameters to customize the poll.
                        </Typography>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '20px' },

                                flexWrap: 'wrap',
                                width: { xs: '100%', md: '50%' },
                                mb: 2,
                                mt: 6,
                            }}
                        >
                            <b>The following parameters are required to be filled in:</b>
                        </Typography>

                        <Typography align='left' sx={{ color: 'white', ml: 3, mt: 1 }}>
                            <b>&quot;title&quot;: </b>A title for the event you are creating a poll for.
                        </Typography>
                        <Typography align='left' sx={{ color: 'white', ml: 3, mt: 1 }}>
                            <b>&quot;votestowin&quot;:</b> The amount of votes that any poll option needs in order to
                            win. The intent of this setting is to guarantee the winning choice will suit your needs for
                            amount of attendees.
                        </Typography>

                        <Typography align='left' sx={{ color: 'white', ml: 3, mt: 1 }}>
                            <b>&quot;pollduration&quot;:</b> The amount of time that the poll will last, in terms of
                            hours. For example, setting this parameter to &quot;24&quot; will cause the poll to last for
                            a full day before terminating if not enough votes have been cast. The recommendation for
                            this setting is 168 (a week) or less. Using decimals is possible to allow for granularity.
                        </Typography>
                        <Typography align='left' sx={{ color: 'white', ml: 3, mt: 1 }}>
                            <b>&quot;option1&quot;:</b> The first date/time option for your poll. All options must be
                            entered in one of the following compatible formats:
                        </Typography>
                        <Typography align='left' sx={{ color: 'white', ml: 6, mt: 1 }}>
                            &quot;Month-Day-Year&quot; followed by either &quot;hour:minute AM/PM&quot; or &quot;hour
                            AM/PM&quot; (Example: &quot;1-2-2023 5:00 PM&quot; or &quot;1-2-2023 5 PM&quot;)
                        </Typography>
                        <Typography align='left' sx={{ color: 'white', ml: 6, mt: 1 }}>
                            &quot;Month/Day/Year&quot; followed by either &quot;hour:minute AM/PM&quot; or &quot;hour
                            AM/PM&quot; (Example: &quot;1/2/2023 5:00 PM&quot; or &quot;1/2/2023 5 PM&quot;)
                        </Typography>
                        <Typography align='left' sx={{ color: 'white', mt: 5 }}>
                            Beyond the above parameters you may, but are not required to include an option2, option3,
                            option4, and option5. These entries should follow the same rules as option1 above.
                        </Typography>

                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '20px', md: '30px' },

                                flexWrap: 'wrap',
                                width: { xs: '100%', md: '50%' },
                                mb: 2,
                                mt: 6,
                            }}
                        >
                            <u>Using The Poll</u>
                        </Typography>
                        <Typography align='left' sx={{ color: 'white' }}>
                            After the poll is created, it should now be viewable by the server to vote on. Users should
                            react to the poll using the appropriate number associated with the options they are willing
                            to attend. If any option reaches a total number of votes equal to &quot;votestowin&quot;
                            designated in the &quot;/poll&quot; command, the poll will conclude and a Discord server
                            event will be automatically created for the date/time associated with the winning option.
                        </Typography>
                        <Typography align='left' sx={{ color: 'white', mt: 2 }}>
                            If the poll duration elapses before any option reaches the necessary votes to win, the poll
                            will automatically cancel and notify the server of the cancellation.
                        </Typography>
                        <Typography align='left' sx={{ color: 'white', mt: 2 }}>
                            Pressing the &quot;X&quot; reaction at any point while the poll is active will immediately
                            cancel the poll and notify the server.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    p: 3,

                    backgroundColor: 'black',
                    width: '100%',
                }}
            >
                <Box
                    className='footerText'
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'left', md: 'center' },
                        width: '50%',
                        mb: { xs: 2, md: 0 },
                    }}
                >
                    <EmailIcon />
                    &nbsp;
                    <a href='mailto: nick.zaff@gmail.com'>Get In Contact</a>
                </Box>
                <Box
                    className='footerText'
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'left', md: 'center' },
                        width: { xs: '90%', md: '50%' },
                    }}
                >
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
