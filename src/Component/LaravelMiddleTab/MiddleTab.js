import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AboutPart from './AboutPart';
import Feature from './Feature';
import LearningOutCome from './LearningOutCome';
import Faqs from './Faqs';
import Address from './Address';
import RequirementResponsiblity from './RequirementResponsiblity';
import ClassOutLine from './ClassOutLine';


const MiddleTab = () => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `scrollable-auto-tab-${index}`,
          'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
      }
      
      const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          width: '100%',
        },
      }));
      
     
        const classes = useStyles();
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
    return (
        <div className={classes.root}>
        <AppBar position="static" color="default">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Features" {...a11yProps(1)} />
            <Tab label="Course Out Line" {...a11yProps(2)} />
            <Tab label="Learning Out Come" {...a11yProps(3)} />
            <Tab label="FAQs" {...a11yProps(4)} />
            <Tab label="Location" {...a11yProps(5)} />
            <Tab label="Requirements & Responsibilities" {...a11yProps(6)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <AboutPart/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Feature/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <ClassOutLine/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <LearningOutCome/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Faqs/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Address/>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <RequirementResponsiblity/>
        </TabPanel>
    </div>
    );
};

export default MiddleTab;