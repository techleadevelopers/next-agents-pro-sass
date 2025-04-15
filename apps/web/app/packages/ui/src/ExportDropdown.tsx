'use client'

import { Menu, Transition } from '@headlessui/react'
import { Download, FileText, FileSpreadsheet, File } from 'lucide-react'
import { Fragment } from 'react'

export default function ExportDropdown() {
  const exportOptions = [
    { label: 'Exportar CSV', icon: FileText, action: () => console.log('CSV Exportado') },
    { label: 'Exportar PDF', icon: File, action: () => console.log('PDF Exportado') },
    { label: 'Exportar Excel', icon: FileSpreadsheet, action: () => console.log('Excel Exportado') },
  ]

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="
            inline-flex items-center justify-center gap-2
            px-4 py-2 bg-primary text-white font-medium rounded-md
            hover:bg-primary/90 transition
            shadow-[0_0_12px_rgba(134,206,235,0.3)]
          "
        >
          <Download className="w-4 h-4" />
          Exportar
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-150 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-border focus:outline-none z-20"
        >
          {exportOptions.map((item, idx) => (
            <Menu.Item key={idx}>
              {({ active }) => (
                <button
                  onClick={item.action}
                  className={`${
                    active ? 'bg-accent/20' : ''
                  } group flex items-center w-full px-4 py-2 text-sm text-foreground hover:text-accent transition`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
