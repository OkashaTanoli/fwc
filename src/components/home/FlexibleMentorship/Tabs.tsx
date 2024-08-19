import React from 'react';

function Tabs({
    setActive,
    active
}: {
    setActive: React.Dispatch<React.SetStateAction<number>>,
    active: number
}) {
    let tabs = [
        {
            id: 0,
            name: 'Have an hour?'
        },
        {
            id: 1,
            name: 'Have a week?'
        },
        {
            id: 2,
            name: 'Have a month?'
        },
        {
            id: 3,
            name: 'Have more time?'
        },
    ]
    return (
        <div className='flex justify-center gap-5 relative z-10'>
            {
                tabs.map((tab, i) => {
                    return (
                        <div onClick={() => setActive(tab.id)} key={i} className={`py-3 px-5 rounded-md border border-white text-white ${active === tab.id ? 'bg-primary' : 'bg-black'} hover:bg-primary cursor-pointer shadow-2xl`}>
                            {tab.name}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Tabs;