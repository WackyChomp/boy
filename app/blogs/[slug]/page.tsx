
export default function Page({ params }: { params: { slug: string } }) {
  return(
    <div>My Posts: {params.slug}</div>
  )
}