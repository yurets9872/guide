if exist "c:\program files\Elantech" goto Next
goto end

:Next
cd /d "c:\program files\Elantech"
ETDUn_inst.exe /s /f2c:\windows\temp\Touchpad_Elantech_uninst.log
goto end

:end
