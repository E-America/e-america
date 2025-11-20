const Divider = () => {
  return (
    <div 
      className="h-[6px] w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #000080 0%, #4b0082 15%, #8b0000 35%, #ff1493 50%, #ff69b4 70%, #ffb6c1 85%, #ffffff 100%)',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.1) inset, 0 0 2px rgba(255, 255, 255, 0.2) inset'
      }}
    >
      {/* Subtle vertical gradient for soft edges */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 20%, transparent 80%, rgba(255, 255, 255, 0.1) 100%)'
        }}
      />
    </div>
  )
}

export default Divider

