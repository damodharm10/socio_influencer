"use client";
import Stepper from "../../../components/stepper";
import Uploader from "./uploader";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import ArrowBtn from "../../../components/arrow-btn";
export default function Page() {
  return (
    <section>
      <Stepper title='Upload your data ' step='1' />
      <Button
        size='sm'
        ripple={true}
        variant='text'
        color='deep-orange'
        className='text-base p-0 hover:bg-transparent text-primary active:bg-transparent my-5 capitalize font-normal '
      >
        Download sample
      </Button>
      <Uploader />
      <Link href='/setup/template' className='block ml-auto w-max mt-24'>
        <ArrowBtn />
      </Link>
    </section>
  );
}