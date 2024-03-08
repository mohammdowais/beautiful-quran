import React from 'react'

const Menubar = () => {
  return (
    <div className="bg-black/40 absolute top-[5rem] text-gray-500 flex flex-row p-2 rounded-md">
        <div>
           <span>Surah</span><span className="mx-2">{'Al-Fatiha'}</span>
        </div>
        <div>
           <span>Ayah</span><span className="mx-2">{1}</span>
        </div>
        <div className="px-3"> | </div>
        <div>
            <span>Translation</span><span className="mx-2">Maulana Wahiddin Khan</span>
        </div>
    </div>
  )
}

export default Menubar