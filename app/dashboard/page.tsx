"use client";

import  { useState, useEffect } from 'react';
import Header from './components/Header';
import Display from './components/Display';
import AddNew from './components/AddNew';



export type Tab = 'projects' | 'products' | 'materials' |'addNew';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<Tab>('projects');

    return (
        <>
            <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
            {activeTab === 'addNew' ? (
                <AddNew  setActiveTab={setActiveTab}/>
            ) : (
                <Display activeTab={activeTab}/>
            )}
        </>
    );
}
