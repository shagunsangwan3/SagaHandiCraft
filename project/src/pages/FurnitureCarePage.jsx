import PageHeader from '../components/PageHeader'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

const careItems = [
  {
    title: 'Use a Tablecloth or Protective Cover',
    body: 'Try and use a tablecloth or any thick quality cloth on your dining table or any other table which is subject to daily and heavy use. This protects the surface from scratches, heat marks, and staining.',
  },
  {
    title: 'Regular Gentle Cleaning',
    body: 'Cleaning your furniture items regularly will help you to maintain them for a long time. Make sure that you clean your furniture gently with a soft, lightly damp cloth. Using a rough rag and pressing it hard against the wood might lead to minor scratches on the surface.',
  },
  {
    title: 'Avoid Heat Sources',
    body: 'Avoid placing items like burning candles or iron on any furniture as the heat generated from them may affect the life of your furniture. Always use coasters, trivets, or heat-resistant pads beneath hot items.',
  },
  {
    title: 'Keep Away from Direct Sunlight',
    body: 'Prolonged exposure to direct sunlight can cause the wood to fade, crack, or warp over time. Position your furniture away from windows or use UV-protective curtains or blinds to shield it from harsh sunlight.',
  },
  {
    title: 'Control Indoor Humidity',
    body: 'Wood naturally expands and contracts with changes in humidity. Avoid placing furniture near air conditioners, radiators, or vents. Aim for a consistent indoor humidity level of 40–60% to protect the wood from cracking or warping.',
  },
  {
    title: 'Re-oil or Polish Regularly',
    body: 'For natural-oil-finished furniture, re-apply a quality furniture oil or beeswax polish once or twice a year. This replenishes moisture in the wood and maintains its lustre. Always follow the grain when applying.',
  },
  {
    title: 'Handle Spills Immediately',
    body: 'If liquid is spilled, wipe it away immediately using a soft dry cloth. Do not leave standing water on wood surfaces. For stubborn stains, use a small amount of furniture-approved cleaner — never harsh chemicals.',
  },
  {
    title: 'Protect Legs and Joints',
    body: 'Fit felt pads or floor protectors to the bottoms of chair and table legs. This prevents scratching of floors and reduces the stress on joints when furniture is moved. Avoid dragging furniture across floors.',
  },
  {
    title: 'Tighten Loose Joints Gently',
    body: 'Over time, wooden joints may become slightly loose. Use furniture-grade wood glue and a clamp to re-secure them. Do not force or overtighten bolts on knock-down furniture as this can damage the threads.',
  },
  {
    title: 'Outdoor Furniture Care',
    body: 'For teak or outdoor furniture, apply teak oil annually to maintain its natural oils and appearance. Store cushions indoors during wet seasons. Clean with warm soapy water and a soft brush. Cover outdoor pieces during extended periods of non-use.',
  },
]

const materialGuide = [
  { material: 'Teak Wood', care: 'Clean with a dry cloth. Apply teak oil annually. Avoid prolonged water exposure.' },
  { material: 'Sheesham (Rosewood)', care: 'Dust regularly. Polish with natural wax twice a year. Avoid harsh chemicals.' },
  { material: 'Mango Wood', care: 'Wipe with a slightly damp cloth. Use beeswax polish to maintain moisture.' },
  { material: 'Reclaimed Wood', care: 'Dry cloth only. Avoid water. The natural patina is part of its character.' },
  { material: 'Handwoven Cane', care: 'Dust with a soft brush. Wipe with a slightly damp cloth. Allow to air dry.' },
  { material: 'Iron / Metal', care: 'Wipe with a dry cloth. Treat any rust spots with iron primer before they spread.' },
  { material: 'Brass Hardware', care: 'Polish occasionally with a brass cleaner. Avoid abrasive materials.' },
  { material: 'Marble / Stone', care: 'Wipe immediately after spills. Use a pH-neutral cleaner. Seal periodically.' },
]

export default function FurnitureCarePage() {
  return (
    <div className="min-h-screen bg-cream-100">
      <PageHeader
        badge="Care & Maintenance"
        title="Maintain Your Furniture"
        subtitle="By following these easy care instructions, you can keep your solid wood furniture and décor looking beautiful for years to come. Wood furniture and décor will last for generations with proper care."
        bg="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">

        {/* Intro callout */}
        <div className="bg-gold-100/50 border border-gold-200 rounded-2xl p-6 md:p-8 mb-12 flex gap-5">
          <div className="w-10 h-10 rounded-full bg-gold-200 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-gold-600 text-lg">✦</span>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-bark-400 text-base mb-2">A Note on Handmade Furniture</h3>
            <p className="text-sm text-bark-200 leading-relaxed">
              Handcrafted solid wood furniture is a living material. It will respond to its environment — expanding slightly in humidity and contracting in dry conditions. Natural marks, grain variations, and subtle colour changes over time are signs of authenticity, not defects. With proper care, your SAGA piece will only grow more beautiful with age.
            </p>
          </div>
        </div>

        {/* Care Instructions */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl text-bark-400 mb-8">Care & Instructions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {careItems.map((item, i) => (
              <div key={i} className="bg-white border border-cream-200 rounded-xl p-6 card-lift">
                <div className="flex items-start gap-3">
                  <span className="font-serif font-bold text-gold-400 text-lg leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4 className="font-serif font-semibold text-bark-400 text-sm mb-1.5">{item.title}</h4>
                    <p className="text-xs text-bark-200 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Material-specific guide */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-2xl text-bark-400 mb-8">Material-Specific Care Guide</h2>
          <div className="overflow-x-auto rounded-2xl border border-cream-200">
            <table className="w-full bg-white">
              <thead>
                <tr className="border-b border-cream-200">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-bark-400 uppercase tracking-wider">Material</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-bark-400 uppercase tracking-wider">Care Instructions</th>
                </tr>
              </thead>
              <tbody>
                {materialGuide.map((m, i) => (
                  <tr key={i} className={`border-b border-cream-100 ${i % 2 === 0 ? 'bg-cream-50/50' : 'bg-white'}`}>
                    <td className="px-6 py-4 text-sm font-semibold text-bark-400 whitespace-nowrap">{m.material}</td>
                    <td className="px-6 py-4 text-sm text-bark-200">{m.care}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ short */}
        <div className="bg-cream-200/60 border border-cream-300 rounded-2xl p-8 md:p-10">
          <h3 className="font-serif font-bold text-2xl text-bark-400 mb-6">Common Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'Can I place hot items directly on the table?', a: 'No. Always use coasters, trivets, or heat-resistant pads. Direct heat can cause white marks or burn rings on the wood surface.' },
              { q: 'My furniture has a small scratch — what should I do?', a: 'For minor scratches, rub a small amount of matching wood wax or furniture marker in the direction of the grain. For deeper scratches, contact a local furniture restorer.' },
              { q: 'How often should I oil my teak furniture?', a: 'We recommend applying teak oil once a year for indoor pieces and twice a year for outdoor ones. Never apply oil to furniture in direct sunlight.' },
              { q: 'Can I use household cleaners?', a: 'Avoid harsh household cleaners, bleach, ammonia, or silicon-based polishes. Use only products specifically formulated for wood furniture.' },
            ].map((faq, i) => (
              <div key={i}>
                <h4 className="font-serif font-semibold text-bark-400 text-sm mb-1.5">{faq.q}</h4>
                <p className="text-xs text-bark-200 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <TrustBar />
      <Footer />
    </div>
  )
}
