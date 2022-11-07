import React from 'react'

type Props = {
  content: Array<{ title: string; content: string }>
}

export default function ContentTable({ content = [] }: Props) {
  return (
    <table className="table table-compact w-[30rem]">
      <tbody>
        {content.map((v) => (
          <tr key={v.title}>
            <td className="font-bold border-solid border-base-300 border-[1px]">
              {v.title}
            </td>
            <td className="border-solid border-base-300 border-[1px]">
              {v.content}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
