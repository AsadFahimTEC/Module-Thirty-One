import { Navbar1 } from "@/components/Layout/Navbar";

export default function CommonLayout({children
}: 
{children: React.ReactNode;
}) {

    return (
        <div>
            <Navbar1 />
           {children}
        </div>
    );
};
