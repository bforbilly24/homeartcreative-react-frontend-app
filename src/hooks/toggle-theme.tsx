import * as React from 'react'
import { Moon, Sun, LaptopMinimal } from 'lucide-react'
import { useTheme } from '@/components/providers/theme-provider'
import { Button } from '@/components/ui/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/shadcn/dropdown-menu'

interface ToggleThemeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const ToggleTheme = React.forwardRef<HTMLButtonElement, ToggleThemeProps>(
  ({ className, ...props }, ref) => {
    const { theme, setTheme } = useTheme()

    const handleToggle = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
    }

    return (
      <>
        {/* Mobile: Simple toggle button */}
        <Button
          ref={ref}
          variant='outline'
          size='icon'
          onClick={handleToggle}
          aria-label='Toggle theme'
          className={`flex md:hidden ${className}`}
          {...props}
        >
          <Sun className='h-4 w-4 rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-4 w-4 rotate-90 scale-0 text-primary transition-all dark:rotate-0 dark:scale-100' />
        </Button>

        {/* Desktop: Dropdown menu */}
        <div className='hidden md:flex'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                ref={ref}
                variant='outline'
                size='icon'
                aria-label='Toggle theme'
                className={className}
                {...props}
              >
                <Sun className='h-5 w-5 rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0' />
                <Moon className='absolute h-5 w-5 rotate-90 scale-0 text-primary transition-all dark:rotate-0 dark:scale-100' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='z-[100] mt-4 border-border bg-background'
            >
              <DropdownMenuItem
                onClick={() => setTheme('light')}
                className='text-foreground hover:bg-muted hover:text-foreground'
              >
                <Sun className='mr-2 h-4 w-4' /> Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme('dark')}
                className='text-foreground hover:bg-muted hover:text-foreground'
              >
                <Moon className='mr-2 h-4 w-4' /> Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme('system')}
                className='text-foreground hover:bg-muted hover:text-foreground'
              >
                <LaptopMinimal className='mr-2 h-4 w-4' /> System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </>
    )
  }
)

ToggleTheme.displayName = 'ToggleTheme'

export default ToggleTheme
