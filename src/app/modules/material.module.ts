import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports:[
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports:[
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ]
})

export class MaterialModule {}