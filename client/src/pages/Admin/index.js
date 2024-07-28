// import React from 'react'
// import Header from '../../components/Header'
// import { Tabs } from 'antd';
// import AdminIntro from './AdminIntro';
// import AdminAbout from './AdminAbout';
// import { useSelector } from 'react-redux';
// import AdminEducations from './AdminEducations';
// import AdminProjects from './AdminProjects';
// import AdminActivities from './AdminActivities';
// import AdminContact from './AdminContact';


// const { TabPane } = Tabs;

// function Admin() {
//     const { portfolioData } = useSelector((state) => state.root);
//     return (
//         <div>
//             <Header />
//             <div className="flex gap-10 items-center px-5 py-2 justify-between">
//                 <div className="flex gap-10 items-center">
//                     <h1 className="text-3xl text-primary">Portfolio Admin</h1>
//                     <div className="w-60 h-[1px] bg-gray-500"></div>
//                 </div>

//             </div>

//             {portfolioData && (
//                 <div className='px-5 pb-10'>
//                     <Tabs defaultActiveKey="1">
//                         <TabPane tab="Intro" key="1">
//                             <AdminIntro />
//                         </TabPane>
//                         <TabPane tab="About" key="2">
//                             <AdminAbout />
//                         </TabPane>
//                         <TabPane tab="Education" key="3">
//                             <AdminEducations />
//                         </TabPane>
//                         <TabPane tab="Projects" key="4">
//                             <AdminProjects />
//                         </TabPane>

//                         <TabPane tab="Activities" key="5">
//                             <AdminActivities />
//                         </TabPane>

//                         <TabPane tab="Contact" key="6">
//                             <AdminContact />
//                         </TabPane>
//                     </Tabs>
//                 </div>
//             )}

//         </div>
//     );
// }

// export default Admin



import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminEducations from './AdminEducations';
import AdminProjects from './AdminProjects';
import AdminActivities from './AdminActivities';
import AdminContact from './AdminContact';
import AdminCourses from './AdminCourses';

function Admin() {
    const { portfolioData } = useSelector((state) => state.root);

    const tabItems = [
        {
            key: '1',
            label: 'Intro',
            children: <AdminIntro />,
        },
        {
            key: '2',
            label: 'About',
            children: <AdminAbout />,
        },
        {
            key: '3',
            label: 'Education',
            children: <AdminEducations />,
        },
        {
            key: '4',
            label: 'Projects',
            children: <AdminProjects />,
        },
        {
            key: '5',
            label: 'Activities',
            children: <AdminActivities />,
        },
        {
            key: '6',
            label: 'Achievements',
            children: <AdminCourses />,
        },
        {
            key: '7',
            label: 'Contact',
            children: <AdminContact />,
        },
    ];

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            window.location.href = "/admin-login";
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="flex gap-10 items-center px-5 py-2 justify-between">
                <div className="flex gap-10 items-center">
                    <h1 className="text-3xl text-primary">Portfolio Admin</h1>
                    <div className="w-60 h-[1px] bg-gray-500"></div>
                </div>
                <h1
                    className="underline text-primary text-xl cursor-pointer"
                    onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/admin-login";
                    }}
                >
                    Logout
                </h1>
            </div>

            {portfolioData && (
                <div className='px-5 pb-10'>
                    <Tabs defaultActiveKey="1" items={tabItems} />
                </div>
            )}
        </div>
    );
}

export default Admin;
