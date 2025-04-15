'use client'

import { TableHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface DataTableCustomProps extends TableHTMLAttributes<HTMLTableElement> {
  columns: string[]
  data: any[]
  emptyMessage?: string
}

export default function DataTableCustom({
  columns,
  data,
  emptyMessage = 'Nenhum dado encontrado.',
  className,
  ...props
}: DataTableCustomProps) {
  return (
    <div className="overflow-auto rounded-lg border border-border shadow-md backdrop-blur-sm">
      <table
        {...props}
        className={cn(
          'w-full table-auto text-sm text-foreground border-collapse',
          className
        )}
      >
        <thead>
          <tr className="bg-gradient-to-r from-primary/30 to-accent/10 text-left text-xs font-bold uppercase tracking-wide text-white">
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-3 sticky top-0 z-10 backdrop-blur-md">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-6 text-muted-foreground">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-accent/10 transition duration-200 border-b border-border"
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-2">
                    {row[col] ?? '--'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
