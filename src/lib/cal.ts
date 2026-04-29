export const CAL_LINK = 'camille-breton-2iubwt/15min'

export function openCal() {
  if (typeof document === 'undefined') return

  // Primary: click the hidden data-cal-link trigger Cal.com attached its handler to
  const trigger = document.getElementById('cal-hidden-trigger')
  if (trigger) {
    trigger.click()
    return
  }

  // Secondary: direct Cal modal API
  if (typeof window !== 'undefined' && typeof window.Cal === 'function') {
    window.Cal('modal', { calLink: CAL_LINK, config: { layout: 'month_view' } })
    return
  }

  // Fallback: open in new tab
  window.open(`https://cal.com/${CAL_LINK}`, '_blank')
}
