import Social from "@/Social"
import NavigationTab from "./NavigationTab"
import ToggleTheme from "@/ToggleTheme"
import { useEffect, useRef, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useElementSize } from "@/hooks/useElementSize";



export default function Header() {
	const headerRef = useRef<HTMLElement| null>(null);
	const [headerStyle, setHeaderStyle] = useState<boolean>(true);
	const {storedElementSize} = useElementSize({elementRef:headerRef});
	

	useEffect(() =>{
		if(storedElementSize.width < 500){
			setHeaderStyle(false);
		}
		else{
			setHeaderStyle(true);
		}
		
	}, [storedElementSize]);

	return (
		<>
			<header className="flex justify-center items-center space-x-4 dark:text-white w-full p-5" ref={headerRef}>
				
						<div className="flex md:flex-row justify-center items-center">
							<h1 className="dark:text-white py-5">
								Christopher Nguyen
							</h1>
						
							{
								headerStyle ?
								( 
									<div className="flex flex-row ml-5 justify-center items-center">
										<NavigationTab style={headerStyle} />
										<Social style={headerStyle}/>
										<ToggleTheme />
									</div>
								)
								:
								(
									
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="outline">Open Here</Button>
										</DropdownMenuTrigger>
											<DropdownMenuContent>
												<DropdownMenuItem>
													<NavigationTab style={headerStyle}/>
												</DropdownMenuItem>
												<DropdownMenuItem>
													<Social style = {headerStyle}/>
												</DropdownMenuItem>
												<DropdownMenuItem>
													<ToggleTheme />
												</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								)
							} 
						</div>
				
			</header>
		</>
	)
}
