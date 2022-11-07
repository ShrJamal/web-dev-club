import React from 'react'

type Props = {
  content: Array<{ title: string; content: string }>
}

export default function ContentTable({ content = [] }: Props) {
  return (
    <table className="table table-compact">
      <tbody>
        {content.map((v) => (
          <tr key={v.title}>
            <td className="  font-bold border-solid border-base-300 border-[1px]">
              <span className="pl-2"> {v.title}</span>
            </td>
            <td className="border-solid border-base-300 border-[1px]">
              <span className="pl-2"> {v.content}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
