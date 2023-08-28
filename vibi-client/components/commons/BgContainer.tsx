
const BgContainer = ({ children, height, bg }: {children: React.ReactNode, height: string, bg: string}) => {
  return (
    <div className={`w-full ${height} ${bg}`}>
        {children}
    </div>
  )
}

export default BgContainer