import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignUpForm from '../../../components/organisms/signupform/app';

export default function SignUp() {
  return (
    <>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
            <form action="">
                <div className="pb-50">
                    <Link className="navbar-brand" href="/">
                        <Image src="icon/logo.svg" width={60} height={60} alt="logo"/>
                    </Link>
                </div>
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
                <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
                <SignUpForm/>
            </form>
        </div>
    </section>
    </>
  )
}
