const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '4rem' }}>
      <time>{YEAR}</time> © Gavin Dhanda.
    </small>
  )
}
