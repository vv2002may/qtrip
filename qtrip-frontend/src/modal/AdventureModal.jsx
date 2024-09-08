



export default function AdventureModal({ children }) {
   
   return (
      <div className="fixed top-2 right-1 left-1 h-[98vh] backdrop-blur-lg rounded-md overflow-auto p-2">
          {children}
        </div>
   )
}