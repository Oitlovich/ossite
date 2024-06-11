'use client'
import { useEffect } from 'react'
import { load } from 'recaptcha-v3'

export default function ReCaptcha() {
    useEffect(() => {
        const executeRecaptcha = async () => {
            try {
                const recaptcha = await load(process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY)
                const token = await recaptcha.execute('submit_form')
                console.log(token)
            } catch (error) {
                console.error('reCaptcha error:', error)
            }
        }

        executeRecaptcha()
    }, [])

    return null
}