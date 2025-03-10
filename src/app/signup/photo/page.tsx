import React from 'react';
import '../../styles/sign-up-photo.css';
import Image from 'next/image';
import SignUpOption from '../../../../components/organisms/signupoption/app';

export default function SuPhoto() {
  return (
    <>
       <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
            <form action="">
                <div className="form-input d-md-block d-flex flex-column">
                    <div>
                        <div className="mb-20">
                            <div className="image-upload text-center">
                                <label htmlFor="avatar">
                                    <Image src="icon/upload.svg" width={120} height={120} alt="upload"/>
                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                            </div>
                        </div>
                        <h2 className="fw-bold text-xl text-center color-palette-1 m-0">Shayna Anne</h2>
                        <p className="text-lg text-center color-palette-1 m-0">shayna@anne.com</p>
                       <SignUpOption/>
                    </div>

                    <div className="button-group d-flex flex-column mx-auto">
                        <a className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                            href="/signup/photo/success" role="button">Create My Account</a>
                        <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#"
                            role="button">Terms &
                            Conditions</a>
                    </div>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}
