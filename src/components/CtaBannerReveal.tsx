import CtaBanner from './CtaBanner'

export default function CtaBannerReveal() {
  return (
    <div style={{ backgroundColor: '#F4EEE4' }}>
      {/* overflow: hidden instead of clip — same visual result, wider browser support */}
      <div style={{ borderRadius: '0 0 40px 40px', overflow: 'hidden' }}>
        <CtaBanner />
      </div>
    </div>
  )
}
