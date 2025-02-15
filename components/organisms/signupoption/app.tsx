import React from 'react'

export default function SignUpOption() {
  return (
    <div className="pt-50 pb-50">
    <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite
        Game</label>
    <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg"
        aria-label="Favorite Game">
        <option value="" disabled selected>Select Category</option>
        <option value="fps">First Person Shoter</option>
        <option value="rpg">Role Playing Game</option>
        <option value="arcade">Arcade</option>
        <option value="sport">Sport</option>
    </select>
</div>
  )
}
