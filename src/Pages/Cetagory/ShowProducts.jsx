import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardFormat from './CardFormat';
import TableFormat from './TableFormat';

export const ShowProducts = ({ data,dark }) => (

    
    <Tabs>
        <TabList className={` ${dark ? 'bg-black text-[#f9943b]':'bg-white text-black'}`}>
            <Tab>Card Format</Tab>
            <Tab>Table Format</Tab>
        </TabList>

        <TabPanel>
        

            <div className='grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-5'>
                {
                    data?.map((item) => <CardFormat dark={dark} data={item} key={item?._id} ></CardFormat>)
                }
            </div>

        </TabPanel>
        <TabPanel>
            

                <TableFormat dark={dark} data={data} ></TableFormat>

        </TabPanel>
    </Tabs>
);