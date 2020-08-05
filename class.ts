interface Radio {
	switchRadio(): void;
}

interface Battery {
	checkBatteryStatus(): void;
}

interface RadioWithBattery extends Radio {
	checkBatteryStatus();
}

class Car implements Radio {
	switchRadio() {}
}

class Phone implements Radio, Battery {
	switchRadio() {}
	checkBatteryStatus() {}
}

class CellPhone implements RadioWithBattery {
	switchRadio() {}
	checkBatteryStatus() {}
}
