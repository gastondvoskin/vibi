
const BgContainer = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="w-full h-20 bg-red-500">
        {children}
    </div>
  )
}

export default BgContainer