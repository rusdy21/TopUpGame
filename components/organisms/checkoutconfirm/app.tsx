import React from 'react'

export default function CheckOutConfirm() {
  return (
<>
    <label className="checkbox-label text-lg color-palette-1">I have transferred the money
    <input type="checkbox"/>
    <span className="checkmark"></span>
</label>

<div className="d-md-block d-flex flex-column w-100 pt-50">
<a className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
    href="/checkout/complete" role="button">Confirm
    Payment</a>
</div>
</>
  )
}
